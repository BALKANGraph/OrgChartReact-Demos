import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";

function ChartExample() {
  return (
    <OrgChartReact
      nodeBinding={{ field_0: "name", field_1: "title", img_0: "img" }}
      style={{ width: "100%", height: "100%" }}
      enableSearch={false}
      orientation={OrgChartJS.orientation.right}
      data={[
        {
          "id": 1,
          "tags": ["ceo"],
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
          "pid": 2,
          "tags": ["assistant"],
          "name": "Rudy Griffiths",
          "title": "Assistant",
          "img": "https://cdn.balkan.app/shared/9.jpg"
        },
        {
          "id": 6,
          "pid": 2,
          "tags": ["assistant"],
          "name": "Eli Palmer",
          "title": "Assistant",
          "img": "https://cdn.balkan.app/shared/10.jpg"
        },
        {
          "id": 7,
          "pid": 1,
          "tags": ["RR"],
          "name": "Caden Ellison",
          "title": "Dev Manager",
          "img": "https://cdn.balkan.app/shared/4.jpg"
        },
        {
          "id": 8,
          "pid": 7,
          "name": "Tanner May",
          "title": "Developer",
          "img": "https://cdn.balkan.app/shared/7.jpg"
        },
        {
          "id": 9,
          "pid": 7,
          "name": "Fran Parsons",
          "title": "Developer",
          "img": "https://cdn.balkan.app/shared/8.jpg"
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