import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartJS, OrgChartReact } from "balkan-orgchart-react";

function ChartExample() {
  return (
      <OrgChartReact
        undoRedoStorageName="undoRedoStorage"
        onUpdated={function (this: any) {
          console.log("Updated data:", this.config.data);
              //post config data to your server

              // this.config.nodes
              // this.config.slinks
              // this.config.groupDottedLines
              // this.config.dottedLines
        }}
        nodeBinding={{ field_0: "name", field_1: "title", img_0: "img" }}
        style={{ width: "100%", height: "100%" }}
        data={[
          { id: 1, name: "Amber McKenzie", title: "CEO", img: "https://cdn.balkan.app/shared/empty-img-none.svg" },
          { id: 2, pid: 1, name: "Ava Field", title: "IT Manager", img: "https://cdn.balkan.app/shared/empty-img-none.svg" },
          { id: 3, pid: 1, name: "Rhys Harper", img: "https://cdn.balkan.app/shared/empty-img-none.svg" }
        ]}
        nodeMenu={{
          add: {text: 'Add'},
          edit: {text: 'Edit'},
          remove: {text: 'Remove'},
        }}
      >
      </OrgChartReact>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);