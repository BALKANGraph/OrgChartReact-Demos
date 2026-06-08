import React, { useRef } from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";

function ChartExample() {

  const chartRef = useRef<OrgChartJS>(null);

  return (
    <>
    <div id="nav"> 
      <div>Press and hold one of the button to move the chart in that direction.</div>
      <button 
        onMouseDown={() => chartRef.current?.moveStart({
          up: true 
        })}
        onMouseUp={() => chartRef.current?.moveEnd()}>
        Up
      </button>
      <button 
        onMouseDown={() => chartRef.current?.moveStart({
          down: true
        })}
        onMouseUp={() => chartRef.current?.moveEnd()}>
        Down
      </button>
      <button 
        onMouseDown={() => chartRef.current?.moveStart({
          left: true 
        })}
        onMouseUp={() => chartRef.current?.moveEnd()}>
        Left
      </button>
      <button 
        onMouseDown={() => chartRef.current?.moveStart({
          right: true
        })}
        onMouseUp={() => chartRef.current?.moveEnd()}>
        Right
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