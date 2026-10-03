### Promptfoo AI Customer Support Evaluation Suite

This project provides an automated, regression-tested evaluation matrix to benchmark customer support prompts against strict format boundaries and core compliance criteria using **Promptfoo**. 

### Repository Structure

* promptfooconfig.yaml: The central configuration mapping prompt variations, model endpoints, and global formatting rules.
* dataset.json: The test database containing real-world customer scenarios and specialized row-level verification keywords.

### Core Matrix Design

This evaluation suite processes your variations across a complete cross-product matrix: 

* **3 Prompt Architectures:** (Helpful vs. Concise vs. Expert Policy Refusal Guardrails).
* **1 Engine Provider:** OpenRouter routing directly through google/gemini-2.5-flash.
* **3 Real-World Inquiries:** Subscription cancellation, out-of-window refund policy enforcement, and manager escalation routines.

### Execution Steps

### 1. Set Up Your Environment Authentication

Expose your free OpenRouter API credentials to your terminal session so Promptfoo can route the inference traffic securely: 

bash

export OPENROUTER_API_KEY="sk-or-v1-your-key-here"


### 2. Execute the Matrix Evaluation Pipeline

Compute the full test array locally. This maps all combinations, tracks network latencies, handles caching natively, and reports pass/fail scores directly to your console output: 

bash

npx promptfoo@latest eval


### 3. Launch the Visual Analytics Dashboard

Spin up the local graphical database view to evaluate side-by-side completion tables, drill down into fine-grained response histories, and debug string assertion rules: 

bash

npx promptfoo@latest view


### Evaluation Assets & Exports

To integrate these analytical scores into external code repositories or documentation, compile standalone summaries using these export scripts: 

* **Generate an Offline HTML Report:** 

bash

npx promptfoo@latest export -o report.html


* **Archive Raw Data to a CSV Spreadsheet:** 

bash

npx promptfoo@latest export -o summary.csv


### Engineering Insights From Latest Benchmarks

* **Variant 1 (Helpful Prompt)** tends to fail strict production suites because it remains too conversational, leading to verbose responses that breach standard length caps.
* **Variant 2 (Concise Prompt) & Variant 3 (Expert Prompt)** are optimal, consistently maintaining compliance with length bounds (<400 characters) and ensuring accurate company policy phrasing.
