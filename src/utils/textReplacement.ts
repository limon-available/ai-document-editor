export function createWhiteOverlay( ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number ) 
{ ctx.fillStyle = "white"; ctx.fillRect(x, y, width, height); } 
export function drawNewText( ctx: CanvasRenderingContext2D, text: string, x: number, y: number )
 { ctx.fillStyle = "black"; ctx.font = "20px Arial"; ctx.fillText(text, x, y); }