import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact } from "balkan-orgchart-react";

export const ChartExample = () => {
  return  <OrgChartReact 
            data={[
              { id: 1 },
              { id: 2, pid: 1 },
              { id: 3, pid: 1 },
              { id: 4, pid: 1 },
              { id: 5, pid: 3 },
              { id: 6, pid: 3 }
            ]} 
            nodeBinding={{
              field_0: "id",
              field_1: "pid",
            }}
            roots={[3]}>
          </OrgChartReact>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);