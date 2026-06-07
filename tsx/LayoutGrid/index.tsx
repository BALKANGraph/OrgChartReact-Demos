import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";

function ChartExample() {


  return  <OrgChartReact 
            layout={OrgChartJS.layout.grid}
            layoutGridColumns={4}
            data={[
              { id: 1, pid: 0 }, 
              { id: 2, pid: 1 },
              { id: 3, pid: 1 },
              { id: 4, pid: 1 },
              { id: 5, pid: 1 },
              { id: 6, pid: 1 },
              { id: 7, pid: 1 },
              { id: 8, pid: 1 },
              { id: 9, pid: 1 }
            ]} >
            
          </OrgChartReact>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);