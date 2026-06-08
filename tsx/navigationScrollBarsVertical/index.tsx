import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";

function ChartExample() {
  return (
      <OrgChartReact
        scaleInitial={OrgChartJS.match.none}
        layout={OrgChartJS.layout.mixed}
        mouseScrool={OrgChartJS.action.yScroll}
        showYScroll={true}
        data={[
          { id: 1 },
          { id: 2, pid: 1 },
          { id: 3, pid: 1 },
          { id: 4, pid: 1 },
          { id: 5, pid: 2 },
          { id: 6, pid: 2 },
          { id: 7, pid: 2 },
          { id: 8, pid: 2 },
          { id: 9, pid: 2 },
          { id: 10, pid: 2 },
          { id: 11, pid: 2 },
          { id: 12, pid: 2 },
          { id: 14, pid: 2 },
          { id: 15, pid: 3 },
          { id: 16, pid: 3 },
          { id: 17, pid: 3 },
          { id: 18, pid: 3 },
          { id: 19, pid: 3 },
          { id: 20, pid: 3 },
          { id: 21, pid: 3 },
          { id: 22, pid: 3 },
          { id: 23, pid: 4 },
          { id: 24, pid: 4 },
          { id: 25, pid: 4 },
          { id: 26, pid: 4 },
          { id: 27, pid: 4 },
          { id: 28, pid: 4 },
          { id: 29, pid: 4 },
          { id: 30, pid: 4 },
          { id: 31, pid: 2 },
          { id: 32, pid: 2 },
          { id: 33, pid: 2 },
          { id: 34, pid: 2 },
          { id: 35, pid: 2 },
          { id: 36, pid: 2 },
          { id: 37, pid: 2 }
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