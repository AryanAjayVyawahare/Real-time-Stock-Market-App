`use client`;
import { useEffect, useRef } from "react";

const useTreadingViewWedgets = (scriptUrl: string,config: Record<string,unknown>,height = 600) => {
 const  containerref = useRef<HTMLDivElement | null>(null);

   useEffect(  () => {
      if(!containerref.current) return;
    if(containerref.current.dataset.loaded) return;
    containerref.current.innerHTML= `<div class ="treadingview-widget-container__widget" style="height: ${height}px; width: 100%;"></div> `;


    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;
    script.innerHTML = JSON.stringify(config);


    containerref.current.appendChild(script);
    containerref.current.dataset.loaded = "true"; 
  }, [scriptUrl, config, height]);

  return () =>{
    if(containerref.current){ 
        containerref.current.innerHTML= "";
      
  }

 return {containerref};
};

export default useTreadingViewWedgets;
