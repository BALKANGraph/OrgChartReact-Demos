import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, Employee } from "balkan-orgchart-react";

function ChartExample() {
  return (
    <OrgChartReact
      nodeBinding={{ field_0: "name", field_1: "title", img_0: "img" }}
      style={{ width: "100%", height: "100%" }}
      enableSearch={false}
      assistantSeparation={50}
    >
    <Employee
      name="Denny Curtis"
      title="CEO"
      img="https://cdn.balkan.app/shared/2.jpg"
      tags={["ceo"]}
    >
      <Employee
        name="Caden Ellison"
        title="Dev Manager"
        img="https://cdn.balkan.app/shared/4.jpg"
        tags={["RR"]}
      />

      <Employee
        name="Fran Parsons"
        title="Developer"
        img="https://cdn.balkan.app/shared/8.jpg"
      />

      <Employee
        name="Rudy Griffiths"
        title="Assistant"
        img="https://cdn.balkan.app/shared/9.jpg"
        assistant={true}
      />
    </Employee>
    </OrgChartReact>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);