import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, Employee } from "balkan-orgchart-react";

export const ChartExample = () => {
  return  <OrgChartReact 
            nodeBinding={{ field_0: 'name', field_1: 'title' }}
            menu={{ png_export: { text: "Export PNG" }, svg_export: { text: "Export SVG" } }}
            nodeMenu={{ png_export: { text: "Export PNG" }, svg_export: { text: "Export SVG" } }}
            enableSearch={false}
            data={[
                { id: 1, name: "Billy Moore", title: "CEO" },
                { id: 2, pid: 1, name: "Billie Rose", title: "Dev Team Lead" },
                { id: 3, pid: 1, name: "Glenn Bell", title: "HR" },
                { id: 4, pid: 3, name: "Blair Francis", title: "HR" }
            ]}
          >
          </OrgChartReact>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);