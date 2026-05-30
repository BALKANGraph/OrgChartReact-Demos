import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact } from "balkan-orgchart-react";

export const ChartExample = () => {
  return  <OrgChartReact 
            nodeContextMenu={{
              edit: { text: "Edit" },
              add: { text: "Add" }
            }}
            data={[
              { id: 1, name: "Billy Moore", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
              { id: 2, pid: 1, name: "Billie Rose", title: "Dev Team Lead", img: "https://cdn.balkan.app/shared/5.jpg" },
              { id: 3, pid: 1, name: "Glenn Bell", title: "HR", img: "https://cdn.balkan.app/shared/10.jpg" },
              { id: 4, pid: 1, name: "Blair Francis", title: "HR", img: "https://cdn.balkan.app/shared/11.jpg" },

              { id: 5, pid: 3, name: "Skye Terrell", title: "Manager", img: "https://cdn.balkan.app/shared/12.jpg" },
              { id: 6, pid: 3, name: "Jordan Harris", title: "JS Developer", img: "https://cdn.balkan.app/shared/6.jpg" },
              { id: 7, pid: 3, name: "Will Woods", title: "JS Developer", img: "https://cdn.balkan.app/shared/7.jpg" }
            ]}  
            nodeBinding={{ field_0: 'name', field_1: 'title', img_0: 'img' }}>
          </OrgChartReact>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);