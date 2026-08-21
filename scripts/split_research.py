import re
import json

with open('app/article-research-aug20-2026.ts', 'r') as f:
    text = f.read()

blocks = text.split("  },\n  {")
print(f"Found {len(blocks)} blocks")

out_files = []
for i, block in enumerate(blocks):
    if i == 0:
        block = block.split("[\n  {")[1]
    if i == len(blocks) - 1:
        block = block.rsplit("  }\n];", 1)[0]
    
    block = "  {\n" + block + "\n  }"
    
    slug_match = re.search(r"slug:\s*[\"']([^\"']+)[\"']", block)
    if not slug_match:
        print("Slug not found!")
        continue
    slug = slug_match.group(1)
    
    filename = f"app/research-2026-08-20-{slug}.ts"
    out_files.append(filename)
    
    content = f"import type {{ BlogPost }} from './data';\n\nexport const post: BlogPost = {block.strip()};\n"
    with open(filename, 'w') as out:
        out.write(content)

index_content = "import type { BlogPost } from './data';\n"
for i, filename in enumerate(out_files):
    name = filename.split('/')[-1].replace('.ts', '')
    index_content += f"import {{ post as p{i} }} from './{name}';\n"

index_content += "\nexport const august20ResearchPosts: BlogPost[] = [\n"
for i in range(len(out_files)):
    index_content += f"  p{i},\n"
index_content += "];\n"

with open('app/article-research-aug20-2026.ts', 'w') as f:
    f.write(index_content)

manifest = {
  "date": "2026-08-20",
  "articles": []
}
for filename in out_files:
    slug = filename.split('research-2026-08-20-')[1].replace('.ts', '')
    manifest["articles"].append({
        "route": f"/research/{slug}",
        "source": filename
    })

with open('.paperclip/daily-content/2026-08-20/research.json', 'w') as f:
    json.dump(manifest, f, indent=2)

