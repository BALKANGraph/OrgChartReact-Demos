import React, { useRef } from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";

function ChartExample() {

  const chartRef = useRef<OrgChartJS>(null);

  return (
      
      <OrgChartReact
        ref={chartRef}
        orientation={OrgChartJS.orientation.left}
        onInit={() => {
          chartRef.current?.moveNodesToVisibleArea([10, 12]);
        }}
        scaleInitial={OrgChartJS.match.none}
        nodeBinding={{field_0: "id"}}
        data={[
          { id: 1 },
          { id: 2, pid: 1 },
          { id: 3, pid: 1 },
          { id: 4, pid: 1 },
          { id: 5, pid: 1 },
          { id: 6, pid: 1 },
          { id: 7, pid: 1 },
          { id: 8, pid: 1 },
          { id: 9, pid: 1 },
          { id: 10, pid: 1 },
          { id: 11, pid: 2 },
          { id: 12, pid: 2 },
          { id: 13, pid: 3 },
          { id: 15, pid: 3 },
          { id: 16, pid: 3 },
          { id: 17, pid: 16 }
        ]}
      >
      </OrgChartReact>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);