import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";

export const ChartExample = () => {
  return  <OrgChartReact 
            data={[
              { id: "root", tags: ["ig"] },
              { id: 0, stpid: "root" },
              { id: 1, pid: 0 },
              { id: 2, pid: 0 },
              { id: 3, pid: "root" },
              { id: 4, pid: "root" }
            ]}
            tags={{
              "ig": {
                  template: "invisibleGroup",
                  subTreeConfig: {
                      orientation: OrgChartJS.orientation.bottom
                  }
              }
            }}>
          </OrgChartReact>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);