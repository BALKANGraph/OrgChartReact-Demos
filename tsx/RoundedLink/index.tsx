import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";

export const ChartExample = () => {

  OrgChartJS.templates.ana.link = '<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="1px" fill="none" d="{rounded}" />';
  return  <OrgChartReact 
            data={[
              { id: 1, name: "Amber McKenzie" },
              { id: 2, pid: 1, name: "Ava Field" },
              { id: 3, pid: 1, name: "Peter Stevens" }
            ]}  
            nodeBinding={{ field_0: 'name', field_1: 'title' }}>
          </OrgChartReact>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);