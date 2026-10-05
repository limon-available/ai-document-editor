# AI Document Editor

> Precision OCR + AI-powered document editing in the browser. Upload a document image, magnify any region with a draggable lens, extract text with OCR, and rewrite it with GPT.

![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-6-blue?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-8-purple?style=flat-square&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=flat-square&logo=tailwindcss)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4.1--mini-black?style=flat-square&logo=openai)
![Tesseract](https://img.shields.io/badge/OCR-Tesseract.js-green?style=flat-square)

## ✨ Features

- **📤 Document Upload** — Upload any image document (`image/*`) and render it instantly on a Konva canvas
- **🔍 Draggable Lens Overlay** — Blue dashed, draggable selection rectangle (`LensOverlay`) over the document
- **🔎 Live Magnifier** — Real-time 320×320 canvas zoom of the selected lens region with correct scale mapping
- **📝 OCR Extraction** — Crop lens region → run Tesseract.js (`eng`) → display extracted text
- **🤖 AI Text Editing** — Send OCR text + natural-language instruction to `gpt-4.1-mini` (e.g. *"Change amount to $500"*)
- **🎨 Canvas Text Replacement** — White-out + redraw utilities for replacing text directly on canvas
- **📦 Export** — Export edited canvas to PNG (`ExportImageButton`) or PDF via jsPDF (`ExportPDFButton`)
- **↩️ History & Layers** — Zustand-powered undo/redo (`historyStore`) and text layer management (`layerStore`)
- **⚡ Modern UI** — 3-column layout (Viewer / Magnifier / OCR+AI) built with TailwindCSS + Lucide icons

## 🖥️ Demo Flow

```
1. Upload Document (image) ──► 2. Drag Lens on Document Viewer
        │
        ▼
3. Magnified Preview ──► 4. [Extract Text] → OCR text appears
        │
        ▼
5. Type AI instruction ──► 6. [Apply AI Edit] → Edited text appears
```

Example AI prompts:
- `Fix spelling and grammar`
- `Change amount to $500`
- `Summarize this paragraph`
- `Translate to Bangla`

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | React 19, TypeScript, Vite 8 |
| Canvas | Konva, react-konva 19.2.4 |
| Styling | TailwindCSS 3, PostCSS, Autoprefixer |
| OCR | Tesseract.js 7 |
| AI | OpenAI SDK 6 (`gpt-4.1-mini`) |
| State | Zustand 5 |
| Export | jsPDF 4 |
| Icons | lucide-react |
| Lint | ESLint 10, typescript-eslint |

## 📁 Project Structure

```
ai-document-editor/
├── public/ (favicon.svg, icons.svg)
├── src/
│   ├── App.tsx              # 3-column layout + OCR/AI orchestration
│   ├── main.tsx             # React entry point
│   ├── index.css / App.css  # Tailwind + base styles
│   ├── components/
│   │   ├── UploadBox.tsx    # FileReader → HTMLImageElement
│   │   ├── PdfViewer.tsx    # Konva Stage 600x420 + image
│   │   ├── LensOverlay.tsx  # Draggable Konva Rect lens
│   │   ├── Magnifier.tsx    # 320x320 zoom canvas
│   │   ├── OCRPanel.tsx     # Extract + AI prompt + results
│   │   ├── ai/ (AIEditor, AIPromptBox, AIResult)
│   │   ├── editor/ (CanvasTextRenderer, EditableTextLayer, ReplaceTextModal)
│   │   ├── export/ (ExportImageButton, ExportPDFButton)
│   │   ├── history/ (UndoButton, RedoButton)
│   │   └── layers/ (RenderLayer, SelectionLayer, TextLayer)
│   ├── hooks/ (useLens, useOCR, useAIEdit, useTextReplacement)
│   ├── services/ (openai, tesseract, exportPdf, fontDetection)
│   ├── store/ (historyStore, layerStore via Zustand)
│   └── utils/ (cropRegion, coordinateMapper, textReplacement)
├── index.html / vite.config.ts / tailwind.config.js
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (20 LTS recommended)
- npm 9+
- OpenAI API key from https://platform.openai.com/api-keys

### 1. Clone & Install

```bash
git clone https://github.com/limon-available/ai-document-editor.git
cd ai-document-editor
npm install
```

### 2. Configure Environment

Create `.env` in project root:

```env
VITE_OPENAI_API_KEY=sk-your-openai-key-here
```

> ⚠️ Key runs in browser via `dangerouslyAllowBrowser: true`. Never commit it. Use a backend proxy in production.

### 3. Run / Build

```bash
npm run dev      # dev server → http://localhost:5173
npm run build    # type-check + build to dist/
npm run preview  # preview production build
npm run lint     # eslint .
```

## ⚙️ How It Works

1. `useLens` holds `{x:100,y:100,width:150,height:150}`.
2. `LensOverlay` = draggable Konva Rect (blue, dashed, rounded).
3. `Magnifier` maps lens → real image coords, redraws 320x320 canvas.
4. `cropRegion(image,lens)` crops offscreen canvas (700x500 mapping).
5. `runOCR(canvas)` → `Tesseract.recognize(canvas,'eng')` → text.
6. `editText(text,prompt)` → `gpt-4.1-mini` → edited text.

State: `layerStore` (layers + addLayer), `historyStore` (history + undo/redo) via Zustand.

## 📜 Scripts

| Script | Command | Description |
|--------|---------|-------------|
| dev | `vite` | Dev + HMR |
| build | `tsc -b && vite build` | Build to dist/ |
| preview | `vite preview` | Preview build |
| lint | `eslint .` | Lint |

## 🔑 Env Variables

| Variable | Required | Description |
|----------|----------|-------------|
| VITE_OPENAI_API_KEY | Yes for AI | OpenAI key via import.meta.env |

## 🗺️ Roadmap

- [ ] True PDF upload (pdf.js)
- [ ] In-place Konva text patching
- [ ] Real font detection (now Arial 20px stub)
- [ ] Multi-region OCR
- [ ] Backend proxy for API key
- [ ] Responsive layout (now fixed 700/300/350 grid)
- [ ] Align cropRegion vs Magnifier viewer sizes

## 🤝 Contributing

1. Fork → `git checkout -b feature/x`
2. Commit → push → open PR
3. Run `npm run lint` first

## 📄 License

No LICENSE file yet — add MIT if open-sourcing.

## 👤 Author

limon-available — https://github.com/limon-available/ai-document-editor

---
Built with React + Vite + Konva + Tesseract.js + OpenAI


