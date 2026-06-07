import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";

function ChartExample() {


  return  <OrgChartReact 
            layout={OrgChartJS.layout.treeRight}
            data={[
              { id: 1 },
              { id: 2, pid: 1, level: 1, tags: ["sub level 1"] },
              { id: 3, pid: 1, level: 0 },
              { id: 6, pid: 1, level: 2, tags: ["sub level 2"] },
              { id: 7, pid: 1 },
              { id: 8, pid: 1 },
            ]}
            tags={{
              'sub level 1': {
                  subLevels: 1,
              },
              'sub level 2': {
                  subLevels: 2,
              }
            }} 
            nodeBinding={{
              field_0: "id",
            }}>
            
          </OrgChartReact>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);