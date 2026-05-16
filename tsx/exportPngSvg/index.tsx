import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, Employee } from "balkan-orgchart-react";

export const ChartExample = () => {
  return  <OrgChartReact 
            nodeBinding={{ field_0: 'name', field_1: 'title' }}
            menu={{ png_export: { text: "Export PNG" }, svg_export: { text: "Export SVG" } }}
            nodeMenu={{ png_export: { text: "Export PNG" }, svg_export: { text: "Export SVG" } }}
            enableSearch={false}
          >
            <Employee
              name="Billy Moore"
              title="CEO"
            >
              <Employee
                name="Billie Rose"
                title="Dev Team Lead"
              />

              <Employee
                name="Glenn Bell"
                title="HR"
              >
                <Employee
                  name="Blair Francis"
                  title="HR"
                />
              </Employee>
            </Employee>
          </OrgChartReact>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);