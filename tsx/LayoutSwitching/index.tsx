import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";

function ChartExample() {

  OrgChartJS.MIXED_LAYOUT_IF_NUMBER_OF_CHILDREN_IS_MORE_THEN = 0;

  return  <OrgChartReact 
            layout={OrgChartJS.layout.treeRightOffset}
            data={[
              { id: "1" },
              { id: "2", pid: "1" },
              { id: "3", pid: "1" },
              { id: "4", pid: "2" },
              { id: "7", pid: "3" },
              { id: "8", pid: "3" },
              { id: "9", pid: "3" }
            ]} >            
            
          </OrgChartReact>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);