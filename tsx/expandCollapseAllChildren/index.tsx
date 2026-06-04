import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact } from "balkan-orgchart-react";

export const ChartExample = () => {
  return  <OrgChartReact 
            data={[
              { id: 1 },
              { id: 2, pid: 1 },
              { id: 3, pid: 1 },
              { id: 4, pid: 2 },
              { id: 5, pid: 2 },
              { id: 6, pid: 3 },
              { id: 7, pid: 3 },
              { id: 8, pid: 4 }
            ]} 
            nodeBinding={{
              field_0: "id",
              field_1: "pid",
            }}
            collapse={{
              level: 2,
              allChildren: true
            }}>
          </OrgChartReact>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);