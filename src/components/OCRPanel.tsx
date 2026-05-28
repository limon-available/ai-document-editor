import { Sparkles } from "lucide-react";
interface Props {
  text: string;

  editedText: string;

  aiPrompt: string;

  setAiPrompt: any;

  onExtract: () => void;

  onAIEdit: () => void;

}

function OCRPanel({
  text,
  editedText,
  aiPrompt,
  setAiPrompt,
  onExtract,
  onAIEdit,
}: Props) {
  return (
    <div>

      <h2 className="text-2xl font-semibold mb-4">
        Extract Text
      </h2>

      <button
        onClick={onExtract}
        className="
          bg-blue-600
          hover:bg-blue-700
          text-white
          px-5
          py-2.5
          rounded-xl
          transition
          mb-4
        "
      >
        Extract Text
      </button>

      <textarea
        value={text}
        readOnly
        className="
          w-full
          h-[220px]
          border
          rounded-xl
          p-4
          resize-none
          outline-none
        "
      />

      {/* AI INPUT */}
   <input
  value={aiPrompt}

  onChange={(e) =>
    setAiPrompt(e.target.value)
  }

  placeholder="
    Ask AI to edit selected text...
  "

  className="
    w-full
    mt-4
    border
    rounded-xl
    p-3
    outline-none
    focus:ring-2
    focus:ring-blue-500
  "
/>
      <button
  onClick={onAIEdit}

  className="
    w-full
    mt-4
    bg-purple-600
    hover:bg-purple-700
    text-white
    py-3
    rounded-xl
    transition
    font-medium
    shadow-md
    flex
    items-center
    justify-center
    gap-2
  "
>
  <Sparkles size={18} />

  Apply AI Edit
</button>
<textarea
  value={editedText}

  readOnly

  className="
    w-full
    h-[180px]
    mt-4
    border
    rounded-xl
    p-4
    resize-none
    bg-gray-50
    outline-none
  "
/>
    </div>
  );
}

export default OCRPanel;