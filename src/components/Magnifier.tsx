interface Props {
  image: HTMLImageElement | null;

  lens: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

function Magnifier({
  image,
  lens,
}: Props) {

  if (!image) return null;

  const viewerWidth = 600;
  const viewerHeight = 420;

  // SCALE
  const scaleX =
    image.width / viewerWidth;

  const scaleY =
    image.height / viewerHeight;

  // REAL IMAGE POSITION
  const realX = lens.x * scaleX;

  const realY = lens.y * scaleY;

  const realWidth =
    lens.width * scaleX;

  const realHeight =
    lens.height * scaleY;

  return (
    <div
      className="
        w-full
        h-[350px]
        overflow-hidden
        rounded-xl
        border-2
        border-blue-500
        bg-white
        flex
        items-center
        justify-center
      "
    >

      <canvas
        ref={(canvas) => {
          if (!canvas) return;

          const ctx =
            canvas.getContext("2d");

          if (!ctx) return;

          canvas.width = 320;
          canvas.height = 320;

          ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
          );

          ctx.drawImage(
            image,
            realX,
            realY,
            realWidth,
            realHeight,
            0,
            0,
            canvas.width,
            canvas.height
          );
        }}

        className="
          rounded-xl
          shadow
          max-w-full
          max-h-full
        "
      />

    </div>
  );
}

export default Magnifier;