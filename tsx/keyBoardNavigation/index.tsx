import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact } from "balkan-orgchart-react";

function ChartExample() {


  return  <OrgChartReact 
            keyNavigation={true}
            data={[
              { id: 1, name: "Denny Curtis" },
              { id: 2, pid: 1, name: "Ashley Barnett" },
              { id: 3, pid: 1, name: "Caden Ellison" },
              { id: 4, pid: 2, name: "Elliot Patel" },
              { id: 5, pid: 2, name: "Lynn Hussain" },
              { id: 6, pid: 3, name: "Tanner May" },
              { id: 7, pid: 3, name: "Fran Parsons" }
            ]} 
            nodeBinding={{
              field_0: "name"
            }}>
          </OrgChartReact>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);