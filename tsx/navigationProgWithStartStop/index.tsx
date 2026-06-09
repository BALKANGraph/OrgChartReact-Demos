import React, { useRef } from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";

function ChartExample() {

  const chartRef = useRef<OrgChartJS>(null);

  function startMove() {
      chartRef.current?.moveStart({
        left: true,
        up: true
    }, undefined, OrgChartJS.anim.inSin, 5000);
  }; 

  return (
    <>
    <div id="nav"> 

      <button 
        onClick={() => startMove()}>
        Left and Up
      </button>
      <button 
        onClick={() => chartRef.current?.moveEnd()}>
        End
      </button>
    </div>
      
      <OrgChartReact
        ref={chartRef}
        scaleInitial={OrgChartJS.match.none}
        data={[
          { id: 1 },
          { id: 2, pid: 1 },
          { id: 3, pid: 1 }
        ]}
      >
      </OrgChartReact>
      </>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);