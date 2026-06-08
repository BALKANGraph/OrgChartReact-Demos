import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";

function ChartExample() {

  OrgChartJS.miniMap.colors = ["#FFCA28", "#F57C00", "#039be5", "#757575"];
  OrgChartJS.miniMap.selectorBackgroundColor = "#888888";
  OrgChartJS.miniMap.focusStroke = "#039BE5";
  OrgChartJS.miniMap.opacity = 0.8;
  OrgChartJS.miniMap.border = '2px solid #039BE5';
  OrgChartJS.miniMap.width = 200;
  OrgChartJS.miniMap.height = 100;
  OrgChartJS.miniMap.padding = 10;
  OrgChartJS.miniMap.position = {
    top: 'padding',
    left: 'padding',
    right: undefined,
    bottom: undefined
  };

  return (
    <OrgChartReact
      miniMap={true}
      scaleInitial={OrgChartJS.match.none}
      mouseScrool={OrgChartJS.action.ctrlZoom}
      tags={{
        "node-with-subtrees": {
          template: "group",
          subTreeConfig: {
            orientation: OrgChartJS.orientation.left
          }
        },
        "node-with-subtrees-bottom": {
          template: "group",
          subTreeConfig: {
            orientation: OrgChartJS.orientation.bottom
          }
        }
      }}
      data={[
        { id: 0 },
        { id: 1, pid: 0, tags: ["node-with-subtrees"] },
        { id: 2, stpid: 1 },
        { id: 3, pid: 2, tags: ["node-with-subtrees-bottom"] },
        { id: 4, stpid: 3 },
        { id: 5, pid: 4 },
        { id: 11, pid: 0, tags: ["node-with-subtrees"] },
        { id: 12, stpid: 11 },
        { id: 13, pid: 12, tags: ["node-with-subtrees-bottom"] },
        { id: 14, stpid: 13 },
        { id: 15, pid: 14 },
        { id: 21, pid: 0, tags: ["node-with-subtrees"] },
        { id: 22, stpid: 21 },
        { id: 23, pid: 22, tags: ["node-with-subtrees-bottom"] },
        { id: 24, stpid: 23 },
        { id: 25, pid: 24 },
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