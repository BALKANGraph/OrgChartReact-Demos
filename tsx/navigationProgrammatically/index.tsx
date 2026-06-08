import React, { useRef } from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";

function ChartExample() {

  const chartRef = useRef<OrgChartJS>(null);
  let chart = chartRef.current;

  return (
    <>
    <div id="nav"> 
      <div>Press and hold one of the button to move the chart in that direction.</div>
      <button 
        onMouseDown={() => chart?.moveStart({
          up: true 
        })}
        onMouseUp={() => chart?.moveEnd()}>
        Up
      </button>
      <button 
        onMouseDown={() => chart?.moveStart({
          down: true
        })}
        onMouseUp={() => chart?.moveEnd()}>
        Down
      </button>
      <button 
        onMouseDown={() => chart?.moveStart({
          left: true 
        })}
        onMouseUp={() => chart?.moveEnd()}>
        Left
      </button>
      <button 
        onMouseDown={() => chart?.moveStart({
          right: true
        })}
        onMouseUp={() => chart?.moveEnd()}>
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