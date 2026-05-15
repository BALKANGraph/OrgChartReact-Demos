import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";

export const ChartExample = () => {
  OrgChartJS.CLINK_CURVE = 1.5;
  return  <OrgChartReact 
            data={[
              { id: 0 },
              { id: 1, pid: 0 },
              { id: 2, pid: 0 },
              { id: 3, pid: 1 },
              { id: 4, pid: 2 }
            ]}  
            clinks={[
              { from: 4, to: 0, label: 'text' }
            ]}
            nodeBinding={{ field_0: 'name', field_1: 'title' }}>
          </OrgChartReact>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);