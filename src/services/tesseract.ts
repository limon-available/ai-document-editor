import Tesseract from "tesseract.js"; 
export async function extractText( image: HTMLCanvasElement )
 { 
    const result = await Tesseract.recognize( image, "eng" ); 
    return result.data.text;
 }