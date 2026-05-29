import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact } from "balkan-orgchart-react";

export const ChartExample = () => {
  return  <OrgChartReact 
            controls={{
              pdf_export: { title: 'Export to PDF' },
              zoom_in: { title: "Zoom In"},
              zoom_out: { title: "Zoom Out"},
              fit: { title: "Fit the chart"}
            }}
            data={[
              { id: 1, name: "Denny Curtis" },
              { id: 2, pid: 1, name: "Ashley Barnett" },
              { id: 3, pid: 1, name: "Caden Ellison" }
            ]}  
            nodeBinding={{ field_0: 'name', field_1: 'title' }}>
          </OrgChartReact>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);