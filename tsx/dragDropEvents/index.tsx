import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact } from "balkan-orgchart-react";

export const ChartExample = () => {
  return  <OrgChartReact 
            enableDragDrop={true}
            onDrop={(args) => {
              if (args.dragId == "1"){
                  return false;
              }

              if (args.dropId == "4"){
                  return false;
              }
            }}
            data={[
              { id: "1", tags: ["Management"], name: "Amber McKenzie", title: "CEO", img: "https://cdn.balkan.app/shared/1.jpg" },
              { id: "2", pid: "1", tags: ["IT Manager"], name: "Ava Field", title: "IT Manager", img: "https://cdn.balkan.app/shared/2.jpg" },
              { id: "3", pid: "1", tags: ["Marketing Manager"], name: "Rhys Harper", title: "Marketing Team Lead", img: "https://cdn.balkan.app/shared/3.jpg" },
              { id: "4", pid: "2", tags: ["IT"], name: "Carol Foster", title: "Junior Developer", img: "https://cdn.balkan.app/shared/4.jpg" },
              { id: "5", pid: "2", tags: ["IT"], name: "Blake Morris", title: "Senior Developer", img: "https://cdn.balkan.app/shared/5.jpg" },
              { id: "6", pid: "3", tags: ["Marketing"], name: "Erin Grant", title: "Junior Marketing", img: "https://cdn.balkan.app/shared/6.jpg" },
              { id: "7", pid: "3", tags: ["Marketing"], name: "Avery Hughes", title: "Senior Marketing", img: "https://cdn.balkan.app/shared/7.jpg" }
            ]}  
            nodeBinding={{ field_0: 'name', field_1: 'title', img_0: 'img' }}>
          </OrgChartReact>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);