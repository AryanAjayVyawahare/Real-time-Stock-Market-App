"use client";
import React, { memo, useRef } from "react";
import useTradingViewWidget from "./hooks/UseTreadingViewWedgets";


interface TradingViewWidgetProps {
  title: string;
  scriptUrl: string;
  confi: Record<string, unknown>;
  hight?: number;
  className?: string;
} 


const TradingViewWidget = ({title,scriptUrl,confi,hight = 600,className}: TradingViewWidgetProps) => {
  const containerRef = useTradingViewWidget(scriptUrl, confi, hight );

  return (
    <div
      className="tradingview-widget-container"
      ref={containerRef}
      style={{ height: "100%", width: "100%" }}
    >
      <div
        className="tradingview-widget-container__widget"
        style={{ height: "calc(100% - 32px)", width: "100%" }}
      ></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/symbols/NASDAQ-AAPL/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">AAPL stock chart</span>
        </a>
        <span className="trademark"> by TradingView</span>
      </div>
    </div>
  );
};

export default memo(TradingViewWidget);
