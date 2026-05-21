import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact } from "balkan-orgchart-react";

export const ChartExample = () => {

  return <OrgChartReact id="tree"    
            nodeBinding={{ field_0: "employeeName", field_1: "title", field_2: "img" }}
            nodeMenu={{
              details: { text: "Details" },
              edit: { text: "Edit" },
              add: { text: "Add" },
              remove: { text: "Remove" }}}
            enableSearch={false}
            data={[
              {
                "id": 1,
                "employeeName": "Amber McKenzie",
                "title": "CEO",
                "img": "https://cdn.balkan.app/shared/1.jpg"
              },
              {
                "id": 2,
                "pid": 1,
                "employeeName": "Ava Field",
                "title": "IT Manager",
                "img": "https://cdn.balkan.app/shared/2.jpg",
                "mobile": "0878108255"
              },
              {
                "id": 3,
                "pid": 1,
                "employeeName": "Peter Stevens",
                "title": "HR Manager",
                "img": "https://cdn.balkan.app/shared/3.jpg"
              },
              {
                "id": 4,
                "pid": 3,
                "employeeName": "Avery Woods",
                "title": "HR",
                "img": "https://cdn.balkan.app/shared/4.jpg",
                "tags": ["red"]
              }
            ]}
          >
           
    </OrgChartReact>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);