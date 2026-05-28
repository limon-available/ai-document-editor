export function cropRegion(
  image: HTMLImageElement,
  lens: {
    x: number;
    y: number;
    width: number;
    height: number;
  }
) {
  const canvas =
    document.createElement("canvas");

  const ctx =
    canvas.getContext("2d");

  if (!ctx) return null;

  // Viewer size
  const viewerWidth = 700;
  const viewerHeight = 500;

  // Scale calculation
  const scaleX =
    image.width / viewerWidth;

  const scaleY =
    image.height / viewerHeight;

  // Real image coordinates
  const realX = lens.x * scaleX;
  const realY = lens.y * scaleY;

  const realWidth =
    lens.width * scaleX;

  const realHeight =
    lens.height * scaleY;

  canvas.width = realWidth;
  canvas.height = realHeight;

  ctx.drawImage(
    image,
    realX,
    realY,
    realWidth,
    realHeight,
    0,
    0,
    realWidth,
    realHeight
  );

  return canvas;
}