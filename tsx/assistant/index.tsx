import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, Employee } from "balkan-orgchart-react";

function ChartExample() {
  return (
    <OrgChartReact
      nodeBinding={{ field_0: "name", field_1: "title", img_0: "img" }}
      style={{ width: "100%", height: "100%" }}
      enableSearch={false}
      tags={{ assistant: { template: "ula" } }}
    >
    <Employee
      name="Denny Curtis"
      title="CEO"
      img="https://cdn.balkan.app/shared/2.jpg"
    >
      <Employee
        name="Ashley Barnett"
        title="Sales Manager"
        img="https://cdn.balkan.app/shared/3.jpg"
      >
        <Employee
          name="Elliot Patel"
          title="Sales"
          img="https://cdn.balkan.app/shared/5.jpg"
        />

        <Employee
          name="Lynn Hussain"
          title="Sales"
          img="https://cdn.balkan.app/shared/6.jpg"
        />
      </Employee>

      <Employee
        name="Caden Ellison"
        title="Dev Manager"
        img="https://cdn.balkan.app/shared/4.jpg"
      >
        <Employee
          name="Tanner May"
          title="Developer"
          img="https://cdn.balkan.app/shared/7.jpg"
        />
      </Employee>

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