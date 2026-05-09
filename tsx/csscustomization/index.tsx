import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact } from "balkan-orgchart-react";
import "./style.css";

export const ChartExample = () => {
  return  <OrgChartReact 
            data={[
              { id: 1, name: "Amber McKenzie", title: "CEO", img: "https://cdn.balkan.app/shared/1.jpg" },
              { id: 2, pid: 1, name: "Ava Field", title: "IT Manager", img: "https://cdn.balkan.app/shared/2.jpg", mobile: "0878108255" },
              { id: 3, pid: 1, name: "Peter Stevens", title: "HR Manager", img: "https://cdn.balkan.app/shared/3.jpg" },
              { id: 4, pid: 3, name: "Avery Woods", title: "HR", img: "https://cdn.balkan.app/shared/4.jpg", tags: ["red"] }
            ]}  
            nodeBinding={{ field_0: 'name', field_1: 'title' }}>
          </OrgChartReact>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);