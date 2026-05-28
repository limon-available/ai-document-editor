interface Props {
  onUpload: (
    image: HTMLImageElement
  ) => void;
}

function UploadBox({
  onUpload,
}: Props) {

  const handleFile = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file =
      e.target.files?.[0];

    if (!file) return;

    const reader =
      new FileReader();

    reader.onload = () => {
      const img =
        new window.Image();

      img.src =
        reader.result as string;

      img.onload = () => {
        onUpload(img);
      };
    };

    reader.readAsDataURL(file);
  };

  return (
    <label
      className="
        inline-flex
        items-center
        gap-2
        bg-blue-600
        text-white
        px-5
        py-3
        rounded-xl
        cursor-pointer
        hover:bg-blue-700
        transition
        shadow-md
        font-medium
      "
    >
      Upload Document

      <input
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFile}
      />
    </label>
  );
}

export default UploadBox;