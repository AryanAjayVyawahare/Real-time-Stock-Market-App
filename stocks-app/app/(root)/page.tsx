
import TradingViewWidget from "@/components/TradingViewWidgets"
import { Button } from "@/components/ui/button"
import { MARKET_OVERVIEW_WIDGET_CONFIG } from "@/lib/costants"


const Home = () => {
  const ScriptUrl = `https://s3.tradingview.com/external-embedding/embed-widget`
  return (
      <div className="flex min-h-screen home-wrapper" >
   <section className="grid w-full gap-8 home-section">
    <div className="md:col-span-1 xl:col-span-1">
         <TradingViewWidget
  title="Market Overview"
  scriptUrl={`${ScriptUrl}-market-overview.js`}
  config={MARKET_OVERVIEW_WIDGET_CONFIG}
  className="custom-chart"
  hight={600}
/>

    </div>
    <div className="md-col-span xl:col-span-2">
       <TradingViewWidget
  title="Stock HeatMap"
  scriptUrl={`${ScriptUrl}-stock-heatmap.js`}
  config={MARKET_OVERVIEW_WIDGET_CONFIG}
  className="custom-chart"
  hight={600}
/>
    </div>
   </section>
    </div>
 
  )
}

export default Home