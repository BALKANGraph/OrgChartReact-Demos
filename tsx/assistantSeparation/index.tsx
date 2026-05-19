import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact } from "balkan-orgchart-react";

function ChartExample() {
  return (
    <OrgChartReact
      nodeBinding={{ field_0: "name", field_1: "title", img_0: "img" }}
      style={{ width: "100%", height: "100%" }}
      enableSearch={false}
      assistantSeparation={50}
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
          "tags": ["RR"],
          "name": "Caden Ellison",
          "title": "Dev Manager",
          "img": "https://cdn.balkan.app/shared/4.jpg"
        },
        {
          "id": 3,
          "pid": 1,
          "name": "Fran Parsons",
          "title": "Developer",
          "img": "https://cdn.balkan.app/shared/8.jpg"
        },
        {
          "id": 4,
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