import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact } from "balkan-orgchart-react";

export const ChartExample = () => {
  return  <OrgChartReact 
            template="olivia"
            data={[
              { id: 1, name: "John Carter", title: "CEO", img: "https://cdn.balkan.app/shared/a/2.jpg" },
              { id: 2, pid: 1, name: "Emma Stone", title: "CTO", img: "https://cdn.balkan.app/shared/a/3.jpg" },
              { id: 3, pid: 1, name: "Liam Brown", title: "CFO", img: "https://cdn.balkan.app/shared/a/4.jpg" },
              { id: 4, pid: 2, name: "Olivia Davis", title: "Senior Developer", img: "https://cdn.balkan.app/shared/a/5.jpg" },
              { id: 5, pid: 2, name: "Noah Wilson", title: "Backend Developer", img: "https://cdn.balkan.app/shared/a/6.jpg" },
              { id: 6, pid: 2, name: "Ava Martinez", title: "Frontend Developer", img: "https://cdn.balkan.app/shared/a/7.jpg" },
              { id: 7, pid: 1, tags: ['assistant'], name: "James Anderson", title: "Executive Assistant", img: "https://cdn.balkan.app/shared/a/8.jpg" },
              { id: 8, pid: 5, name: "Sophia Taylor", title: "QA Engineer", img: "https://cdn.balkan.app/shared/a/9.jpg" },
              { id: 9, pid: 5, name: "William Thomas", title: "DevOps Engineer", img: "https://cdn.balkan.app/shared/a/10.jpg" },
              { id: 11, pid: 2, name: "Isabella Moore", title: "UI/UX Designer", img: "https://cdn.balkan.app/shared/a/11.jpg" }
            ]}  
            nodeBinding={{ field_0: 'name', field_1: 'title', img_0: 'img' }}
            highlightOnHover="sameLevel">
          </OrgChartReact>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);