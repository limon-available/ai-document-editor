import { useState } from "react"; 
export function useLens() {
     const [lens, setLens] = useState({ x: 100, y: 100, width: 150, height: 150, }); 
     return { 
        lens, setLens, }; 
    
    }