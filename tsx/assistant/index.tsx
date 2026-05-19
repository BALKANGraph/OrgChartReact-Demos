import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact } from "balkan-orgchart-react";

function ChartExample() {
  return (
    <OrgChartReact
      nodeBinding={{ field_0: "name", field_1: "title", img_0: "img" }}
      style={{ width: "100%", height: "100%" }}
      enableSearch={false}
      tags={{ assistant: { template: "ula" } }}
      data={[
        {
          "id": 1,
          "name": "Denny Curtis",
          "title": "CEO",
          "img": "https://cdn.balkan.app/shared/2.jpg"
        },
        {
          "id": 2,
          "pid": 1,
          "name": "Ashley Barnett",
          "title": "Sales Manager",
          "img": "https://cdn.balkan.app/shared/3.jpg"
        },
        {
          "id": 3,
          "pid": 2,
          "name": "Elliot Patel",
          "title": "Sales",
          "img": "https://cdn.balkan.app/shared/5.jpg"
        },
        {
          "id": 4,
          "pid": 2,
          "name": "Lynn Hussain",
          "title": "Sales",
          "img": "https://cdn.balkan.app/shared/6.jpg"
        },
        {
          "id": 5,
          "pid": 1,
          "name": "Caden Ellison",
          "title": "Dev Manager",
          "img": "https://cdn.balkan.app/shared/4.jpg"
        },
        {
          "id": 6,
          "pid": 5,
          "name": "Tanner May",
          "title": "Developer",
          "img": "https://cdn.balkan.app/shared/7.jpg"
        },
        {
          "id": 7,
          "pid": 1,
          "tags": ["assistant"],
          "name": "Rudy Griffiths",
          "title": "Assistant",
          "img": "https://cdn.balkan.app/shared/9.jpg"
        }
      ]}
    >


    </OrgChartReact>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);