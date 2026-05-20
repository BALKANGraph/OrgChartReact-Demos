import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact } from "balkan-orgchart-react";

export const ChartExample = () => {
  return  <OrgChartReact 
            template="ula"
            nodeBinding={{ field_0: 'name', field_1: 'title', img_0: 'img' }}
            menu={{ visio_export: { text: "Export to Visio" } }}
            enableSearch={false}
            data={[
              { id: 1, name: "Billy Moore", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
              { id: 2, pid: 1, name: "Billie Rose", title: "Dev Team Lead", img: "https://cdn.balkan.app/shared/5.jpg" },
              { id: 3, pid: 1, name: "Glenn Bell", title: "HR", img: "https://cdn.balkan.app/shared/10.jpg" },
              { id: 4, pid: 3, name: "Blair Francis", title: "HR", img: "https://cdn.balkan.app/shared/11.jpg" }
            ]}
          >
          </OrgChartReact>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);