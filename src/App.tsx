import { useState } from "react";

import UploadBox from "./components/UploadBox";
import PdfViewer from "./components/PdfViewer";
import LensOverlay from "./components/LensOverlay";
import Magnifier from "./components/Magnifier";
import OCRPanel from "./components/OCRPanel";

import { useLens } from "./hooks/useLens";
import { useOCR } from "./hooks/useOCR";
import { editText } from "./services/openai";
import { cropRegion } from "./utils/cropRegion";

function App() {
  const [image, setImage] =
    useState<HTMLImageElement | null>(null);

  const { lens, setLens } = useLens();
  const [aiPrompt, setAiPrompt] =
  useState("");

const [editedText, setEditedText] =
  useState("");

  const {
    text,
    loading,
    runOCR,
  } = useOCR();

  const handleOCR = async () => {
    if (!image) return;

    const cropped = cropRegion(
      image,
      lens
    );

    if (!cropped) return;

    await runOCR(cropped);
  };
  const handleAIEdit =
  async () => {

  if (!text) return;

  const result =
    await editText(
      text,
      aiPrompt
    );
  console.log(result);

  setEditedText(result);
};

  return (
    <div className="min-h-screen bg-[#f3f4f6] p-6">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-5xl font-bold text-gray-800">
          AI Document Editor
        </h1>

        <p className="text-gray-500 mt-2">
          Precision OCR + Magnification Tool
        </p>
      </div>

      {/* UPLOAD */}
      <div className="mb-6">
        <UploadBox onUpload={setImage} />
      </div>

      {/* MAIN GRID */}
      <div
        className="
          grid
          grid-cols-[700px_300px_350px]
          gap-6
          items-start
        "
      >

        {/* PDF VIEWER */}
        <div
          className="
            bg-white
            p-4
            rounded-2xl
            shadow-lg
            border
          "
        >
          <h2 className="text-2xl font-semibold mb-4">
            Document Viewer
          </h2>

          <PdfViewer image={image}>
            <LensOverlay
              lens={lens}
              setLens={setLens}
            />
          </PdfViewer>
        </div>

        {/* MAGNIFIER */}
        <div
          className="
            bg-white
            p-4
            rounded-2xl
            shadow-lg
            border
          "
        >
          <h2 className="text-2xl font-semibold mb-4">
            Magnify Region
          </h2>

          <Magnifier
            image={image}
            lens={lens}
          />
        </div>

        {/* OCR PANEL */}
        <div
          className="
            bg-white
            p-4
            rounded-2xl
            shadow-lg
            border
          "
        >
        <OCRPanel
  text={text}
  editedText={editedText}
  aiPrompt={aiPrompt}
  setAiPrompt={setAiPrompt}
  loading={loading}
  onExtract={handleOCR}
  onAIEdit={handleAIEdit}
/>
        </div>

      </div>
    </div>
  );
}

export default App;