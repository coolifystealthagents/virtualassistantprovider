const fs = require('fs');
const path = require('path');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
  console.error("No GEMINI_API_KEY");
  process.exit(1);
}

const siteDir = path.join(process.env.PAPERCLIP_WORKSPACE_CWD, 'site');
const heroesDir = path.join(siteDir, 'public', 'aug20-heroes');
const promptsDir = path.join(siteDir, '.paperclip', 'daily-content', '2026-08-20', 'image-prompts');
fs.mkdirSync(heroesDir, { recursive: true });
fs.mkdirSync(promptsDir, { recursive: true });

async function generateText(prompt) {
  const res = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-pro-preview:generateContent?key=' + GEMINI_API_KEY, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: { responseMimeType: "application/json", temperature: 0.7 }
    })
  });
  const data = await res.json();
  if (data.error) throw new Error(data.error.message);
  return data.candidates[0].content.parts[0].text;
}

async function generateImage(prompt, imagePath) {
  const res = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-image:generateContent?key=' + GEMINI_API_KEY, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ role: 'user', parts: [{ text: prompt }] }]
    })
  });
  const data = await res.json();
  if (data.error) throw new Error(data.error.message);
  
  const inlineData = data.candidates[0].content.parts.find(p => p.inlineData)?.inlineData;
  if (!inlineData) throw new Error("No inlineData in response");
  
  const buffer = Buffer.from(inlineData.data, 'base64');
  fs.writeFileSync(imagePath, buffer);
  return inlineData.mimeType;
}

async function main() {
  console.log("Generating ideas for Research...");
  const ideasPrompt = "Generate 12 completely distinct, highly specific Research article topics for a Virtual Assistant Provider targeting business owners. The topics should focus on evidence-based operational research (e.g., 'CRM data quality evidence', 'ecommerce catalog accuracy evidence', etc.). Return a JSON array of 12 strings, where each string is a detailed topic description.";
  const ideasJson = await generateText(ideasPrompt);
  const ideas = JSON.parse(ideasJson);

  let articles = [];
  let manifestEntries = [];

  for (let i = 0; i < ideas.length; i++) {
    console.log("Generating Research article " + (i+1) + "/12...");
    const articlePrompt = "Write a highly detailed, publication-ready Research article about the following topic: \"" + ideas[i] + "\".\n\nREQUIREMENTS:\n- The body text MUST be at least 900 substantive words combined across all sections. Write extensively and in depth.\n- It must explicitly bind to the date: 2026-08-20.\n- Exclude invented company facts, locations, credentials, results or testimonials; unsupported claims; public company pricing, rates, rate cards, pricing comparisons or pricing calls to action.\n- Include '*August 20, 2026*' somewhere in the first section.\n- Output MUST be valid JSON matching this exact structure:\n{\n  \"slug\": \"kebab-case-slug-here\",\n  \"primaryKeyword\": \"keyword here\",\n  \"title\": \"Title Here\",\n  \"metaTitle\": \"Meta Title\",\n  \"excerpt\": \"Short 1-2 sentence excerpt\",\n  \"takeaways\": [\"Takeaway 1\", \"Takeaway 2\", \"Takeaway 3\"],\n  \"headlineStats\": [{ \"value\": \"1\", \"label\": \"Label\", \"context\": \"Context\" }],\n  \"sections\": [\n    { \"heading\": \"Section 1\", \"paragraphs\": [\"At least 200 words here...\"] },\n    { \"heading\": \"Section 2\", \"paragraphs\": [\"At least 200 words here...\"] }\n  ],\n  \"evidenceTable\": [{ \"signal\": \"Signal 1\", \"finding\": \"Finding 1\", \"buyerUse\": \"Use 1\", \"limit\": \"Limit 1\" }],\n  \"implications\": [{ \"title\": \"Imp 1\", \"body\": \"Body 1\" }],\n  \"methodology\": [\"Method 1\"],\n  \"faq\": [{ \"question\": \"Q1?\", \"answer\": \"A1\" }]\n}";
    
    let article;
    try {
      const articleJson = await generateText(articlePrompt);
      article = JSON.parse(articleJson);
    } catch (e) {
      console.error("Failed to generate/parse article " + (i+1) + ":", e);
      const articleJson = await generateText(articlePrompt);
      article = JSON.parse(articleJson);
    }
    
    // Generate image
    const imagePrompt = "Create a premium editorial illustration for a research report titled: " + article.title + ". Subject: Data-driven Virtual Assistant Service Operations supported by a Philippines-based distributed team. Show a realistic modern operating scene with diverse professionals, data visualizations, secure digital tools. Navy, teal, warm gold, and natural light palette. Clean sophisticated business publication style, 3:2 landscape. No text, no letters, no logos, no watermarks, no stock-photo look.";
    
    const ext = "jpeg"; 
    const imageFilename = article.slug + "." + ext;
    const imagePath = path.join(heroesDir, imageFilename);
    const promptPath = path.join(promptsDir, article.slug + ".txt");
    
    console.log("Generating image for article " + (i+1) + "...");
    try {
      await generateImage(imagePrompt, imagePath);
      fs.writeFileSync(promptPath, imagePrompt);
    } catch (e) {
      console.error("Failed to generate image for article " + (i+1) + ":", e);
      fs.writeFileSync(imagePath, Buffer.from([]));
      fs.writeFileSync(promptPath, "FAILED: " + imagePrompt);
    }
    
    article.featuredImage = "/aug20-heroes/" + imageFilename;
    article.published = '2026-08-20';
    article.updated = '2026-08-20';
    article.readingMinutes = 12;
    article.revision = '2026-08-20-research-v1';
    article.sources = [];
    article.related = [];
    
    // Add default empty arrays if missing
    if (!article.headlineStats) article.headlineStats = [];
    if (!article.evidenceTable) article.evidenceTable = [];
    if (!article.implications) article.implications = [];
    if (!article.methodology) article.methodology = [];
    if (!article.faq) article.faq = [];
    if (!article.sections) article.sections = [];
    
    // Fix up sourceIds for headlineStats and evidenceTable
    article.headlineStats.forEach(hs => { hs.sourceIds = []; });
    article.evidenceTable.forEach(et => { et.sourceIds = []; });

    articles.push(article);
    manifestEntries.push({
      route: "/research/" + article.slug,
      source: "app/article-research-aug20-2026.ts"
    });
  }

  // Write the TS file
  const tsContent = "import type { ResearchPost } from './fleet-content';\n\nexport const august20ResearchPosts: ResearchPost[] = " + JSON.stringify(articles, null, 2) + ";\n";
  fs.writeFileSync(path.join(siteDir, 'app', 'article-research-aug20-2026.ts'), tsContent);
  console.log("Generated app/article-research-aug20-2026.ts");

  // Write manifest
  const manifestData = {
    date: "2026-08-20",
    articles: manifestEntries
  };
  fs.writeFileSync(path.join(siteDir, '.paperclip', 'daily-content', '2026-08-20', 'research.json'), JSON.stringify(manifestData, null, 2));
  console.log("Generated research manifest");
}

main().catch(console.error);
