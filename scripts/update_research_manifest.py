import json

manifest = {
  "date": "2026-08-20",
  "articles": [
    {
      "route": "/research/customer-support-escalation-protocols-research",
      "source": "app/article-research-aug20-2026.ts"
    },
    {
      "route": "/research/data-normalization-accuracy-benchmarks-research",
      "source": "app/article-research-aug20-2026.ts"
    },
    {
      "route": "/research/inventory-reconciliation-defect-rates-research",
      "source": "app/article-research-aug20-2026.ts"
    },
    {
      "route": "/research/lead-enrichment-velocity-metrics-research",
      "source": "app/article-research-aug20-2026.ts"
    },
    {
      "route": "/research/contract-metadata-extraction-reliability-research",
      "source": "app/article-research-aug20-2026.ts"
    }
  ]
}

with open('.paperclip/daily-content/2026-08-20/research.json', 'w') as f:
    json.dump(manifest, f, indent=2)

