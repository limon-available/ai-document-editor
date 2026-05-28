import { useState } from "react"; import { extractText } from "../services/tesseract";
 export function useOCR() { 
    const [text, setText] = useState(""); 
    const [loading, setLoading] = useState(false); 
    const runOCR = async ( canvas: HTMLCanvasElement ) => { setLoading(true); 
        const result = await extractText(canvas);
     setText(result); setLoading(false); 
    };
      return { text, loading, runOCR, }; }