import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";

function ChartExample() {


  return  <OrgChartReact 
            layout={OrgChartJS.layout.normal}
            data={[
              { id: "1" },
              { id: "2", pid: "1" },
              { id: "3", pid: "1" },
              { id: "4", pid: "2" },
              { id: "5", pid: "2" },
              { id: "6", pid: "3" },
              { id: "7", pid: "3" }
            ]} >            
            
          </OrgChartReact>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);