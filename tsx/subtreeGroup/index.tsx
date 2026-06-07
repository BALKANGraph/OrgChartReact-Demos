import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact } from "balkan-orgchart-react";

export const ChartExample = () => {
  return  <OrgChartReact 
            data={[
              { id: 0 }, 
              { id: 1, pid: 0, tags: ["node-with-subtrees"] }, 
              { id: 2, stpid: 1 }, 
              { id: 3, stpid: 1 }, 
              { id: 4, stpid: 1 }, 
              { id: 5, stpid: 1 }
            ]}
            tags={{
              "node-with-subtrees": {
                  template: "group",
                  subTreeConfig: {
                      siblingSeparation: 3,
                      columns: 2
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