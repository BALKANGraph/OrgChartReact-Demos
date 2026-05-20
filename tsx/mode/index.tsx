import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact } from "balkan-orgchart-react";

function ChartExample() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <OrgChartReact
        nodeBinding={{ field_0: "name", field_1: "title", img_0: "img" }}
        style={{ width: "100%", height: "100%" }}
        mode="dark"
        template="olivia"
        data={[
          { id: 1, name: "Amber McKenzie", title: "CEO", img: "https://cdn.balkan.app/shared/empty-img-none.svg" },
          { id: 2, pid: 1, name: "Ava Field", title: "IT Manager", img: "https://cdn.balkan.app/shared/empty-img-none.svg" },
          { id: 3, pid: 1, name: "Rhys Harper", img: "https://cdn.balkan.app/shared/empty-img-none.svg" }
        ]}
      >
     
      </OrgChartReact>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);