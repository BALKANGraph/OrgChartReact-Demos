import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";

export const ChartExample = () => {
  return  <OrgChartReact 
            data={[
              { id: 0 },
              { id: 1, pid: 0, tags: ["node-with-subtrees"] },
              { id: 2, stpid: 1 },
              { id: 3, pid: 2, tags: ["node-with-subtrees-bottom"] },
              { id: 4, stpid: 3 },
              { id: 5, pid: 4 }
            ]} 
              tags={{
                "node-with-subtrees": {
                  template: "group",
                  subTreeConfig: {
                      orientation: OrgChartJS.orientation.left
                  }
                },
                "node-with-subtrees-bottom": {
                    template: "group",
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