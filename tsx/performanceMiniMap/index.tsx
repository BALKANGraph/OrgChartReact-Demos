import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";

OrgChartJS.miniMap.width = 800;
OrgChartJS.miniMap.height = 400;

OrgChartJS.LAZY_LOADING_FACTOR = 1000
OrgChartJS.TEXT_THRESHOLD = 1000;
OrgChartJS.IMAGES_THRESHOLD = 1000;
OrgChartJS.LINKS_THRESHOLD = 5000;
OrgChartJS.BUTTONS_THRESHOLD = 200;
OrgChartJS.ANIM_THRESHOLD = 200;;

function ChartExample() {


  let nodes = [];

  nodes.push({
      id: "1_1", photo: "https://cdn.balkan.app/shared/1.jpg"
  });

  let imgIndex = 2;
  for (let i = 0; i < 170; i++) {
      nodes.push({
          id: "2_" + i, pid: "1_1", photo: "https://cdn.balkan.app/shared/" + imgIndex + ".jpg"
      });

      for (let j = 3; j < 150; j++) {
          nodes.push({
              id: j + "_" + i, pid: "2_" + i, photo: "https://cdn.balkan.app/shared/" + imgIndex + ".jpg"
          });

          imgIndex++;
          if (imgIndex > 15) {
              imgIndex = 2;
          }
      }
  }

  
  return (
    <OrgChartReact
      nodeBinding={{ field_0: "id", img_0: "photo" }}
      scaleMin={0.5}
      scaleInitial={0.5}
      miniMap={true}
      data={nodes}
      lazyLoading={true}
      showXScroll={true}
      mouseScrool={OrgChartJS.action.xScroll}
      layout={OrgChartJS.layout.mixed}
    >

    </OrgChartReact>
  );
}


createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);