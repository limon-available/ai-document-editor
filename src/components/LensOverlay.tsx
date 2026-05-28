import { Rect } from "react-konva";

interface Props {
  lens: {
    x: number;
    y: number;
    width: number;
    height: number;
  };

  setLens: any;
}

function LensOverlay({
  lens,
  setLens,
}: Props) {
  return (
    <Rect
      x={lens.x}
      y={lens.y}
      width={lens.width}
      height={lens.height}

      stroke="#2563eb"
      strokeWidth={3}
      dash={[10, 6]}
      cornerRadius={10}
      shadowBlur={10}

      draggable

      onDragMove={(e) => {
        setLens({
          ...lens,
          x: e.target.x(),
          y: e.target.y(),
        });
      }}
    />
  );
}

export default LensOverlay;