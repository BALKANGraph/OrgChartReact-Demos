import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact } from "balkan-orgchart-react";

function ChartExample() {


  return  <OrgChartReact 
            data={[
              { id: 1 },
              { id: 2, pid: 1 },
              { id: 3, pid: 1, tags: ["subLevels1"] },
              { id: 4, pid: 1, tags: ["subLevels1"] },
              { id: 5, pid: 1, tags: ["subLevels2"] },

              { id: 6, pid: 3, tags: ["subLevels0"] },

              { id: 7, pid: 3, tags: ["subLevels0"] },
            ]}  
            tags={{
              "subLevels0": {
                subLevels: 0
              },
              "subLevels1": {
                subLevels: 1
              },
              "subLevels2": {
                subLevels: 2
              },
              "subLevels3": {
                subLevels: 3
              }
            }}>
            
          </OrgChartReact>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);