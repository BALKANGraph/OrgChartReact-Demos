import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";

function ChartExample() {
  return (
      <OrgChartReact
        orientation={OrgChartJS.orientation.top_left}
        data={[
          { id: 1 },
          { id: 2, pid: 1 },
          { id: 3, pid: 1 }
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