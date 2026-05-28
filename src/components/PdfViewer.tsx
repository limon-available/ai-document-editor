import {
  Stage,
  Layer,
  Image as KonvaImage,
} from "react-konva";

interface Props {
  image: HTMLImageElement | null;

  children?: React.ReactNode;
}

function PdfViewer({
  image,
  children,
}: Props) {
  const stageWidth = 600;

  const stageHeight = 420;

  return (
    <Stage
      width={stageWidth}
      height={stageHeight}
    >
      <Layer>
        {image && (
          <KonvaImage
            image={image}
            width={stageWidth}
            height={stageHeight}
          />
        )}

        {children}
      </Layer>
    </Stage>
  );
}

export default PdfViewer;