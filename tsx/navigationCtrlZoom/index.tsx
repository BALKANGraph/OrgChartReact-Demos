import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";

function ChartExample() {
  return (
      <OrgChartReact
        showXScroll={true}
        showYScroll={true}
        scaleInitial={OrgChartJS.match.none}
        layout={OrgChartJS.layout.mixed}
        mouseScrool={OrgChartJS.action.ctrlZoom}
        data={[
          { id: 1 },
          { id: 2, pid: 1 },
          { id: 3, pid: 1 },
          { id: 4, pid: 1 },
          { id: 5, pid: 2 },
          { id: 6, pid: 2 },
          { id: 7, pid: 2 },
          { id: 8, pid: 3 },
          { id: 9, pid: 3 },
          { id: 10, pid: 3 },
          { id: 11, pid: 4 },
          { id: 12, pid: 4 },
          { id: 14, pid: 5 },
          { id: 15, pid: 5 },
          { id: 16, pid: 5 },
          { id: 17, pid: 6 },
          { id: 18, pid: 6 },
          { id: 19, pid: 6 },
          { id: 20, pid: 7 },
          { id: 21, pid: 7 },
          { id: 22, pid: 7 },
          { id: 23, pid: 8 },
          { id: 24, pid: 8 },
          { id: 25, pid: 8 },
          { id: 26, pid: 9 },
          { id: 27, pid: 9 },
          { id: 28, pid: 9 },
          { id: 29, pid: 10 },
          { id: 30, pid: 10 },
          { id: 31, pid: 10 },
          { id: 32, pid: 11 },
          { id: 33, pid: 11 },
          { id: 34, pid: 11 },
          { id: 35, pid: 12 },
          { id: 36, pid: 12 },
          { id: 37, pid: 12 }
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