import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";

export const ChartExample = () => {
OrgChartJS.templates.ana.size = [400, 150];
OrgChartJS.templates.ana.level =  
        `<text style="font-size: 18px;" fill="#ffffff" x="30" y="30" text-anchor="start">level:</text>
        <text style="font-size: 18px;" fill="#ffffff" x="215" y="30" text-anchor="start">{val}</text>`;

OrgChartJS.templates.ana.templateName =  
        `<text style="font-size: 18px;" fill="#ffffff" x="30" y="50" text-anchor="start">templateName:</text>
        <text style="font-size: 18px;" fill="#ffffff" x="215" y="50" text-anchor="start">{val}</text>`;

OrgChartJS.templates.ana.childrenIds =  
        `<text style="font-size: 18px;" fill="#ffffff" x="30" y="70" text-anchor="start">childrenIds:</text>
        <text style="font-size: 18px;" fill="#ffffff" x="215" y="70" text-anchor="start">{val}</text>`;

OrgChartJS.templates.ana.tags =  
        `<text style="font-size: 18px;" fill="#ffffff" x="30" y="90" text-anchor="start">tags:</text>
        <text style="font-size: 18px;" fill="#ffffff" x="215" y="90" text-anchor="start">{val}</text>`;

OrgChartJS.templates.ana.name =  
        `<text style="font-size: 18px;" fill="#ffffff" x="30" y="130" text-anchor="start">name:</text>
        <text style="font-size: 18px;" fill="#ffffff" x="215" y="130" text-anchor="start">{val}</text>`;

  return  <OrgChartReact 
            nodeBinding={{
              level: "level",
              templateName: "templateName",
              childrenIds: "childrenIds",
              tags: "tags",
              name: "name"
            }}
            data={[
              { id: "1", name: "Amber McKenzie", title: "CEO", phone: "878 108 255", email: "amber.mcKenzie@gmail.com" },
              { id: "2", pid: "1", tags: ["IT"], name: "Ava Field", title: "IT Manager", phone: "554 484 126", email: "ava.field@live.com" },
              { id: "3", pid: "1", name: "Peter Stevens", title: "HR Manager", phone: "897 112 444" }
            ]}>
          </OrgChartReact>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);