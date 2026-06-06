import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";

export const ChartExample = () => {
  return  <OrgChartReact 
            enableDragDrop={true}
            movable={OrgChartJS.movable.node}
            // movable={OrgChartJS.movable.tree}
            // movable={OrgChartJS.movable.detachTree}
            data={[
              { id: 1 },
              { id: 2, pid: 1 },
              { id: 3, pid: 1 },
              { id: 4, pid: 2 },
              { id: 5, pid: 2 },
              { id: 6, pid: 3 },
              { id: 7, pid: 4 },
              { id: 8, pid: 7 }
            ]}  
            nodeBinding={{ field_0: 'name', field_1: 'title' }}>
          </OrgChartReact>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);