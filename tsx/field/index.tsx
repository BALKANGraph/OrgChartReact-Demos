import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";

export const ChartExample = () => {
  OrgChartJS.templates.ana.field_0 = '<text class="field_0"  style="font-size: 20px;" fill="#ffffff" x="125" y="30" text-anchor="middle">{val}</text>';
  OrgChartJS.templates.ana.field_1 = '<text class="field_1"  style="font-size: 14px;" fill="#ffffff" x="125" y="50" text-anchor="middle">{val}</text>';
  OrgChartJS.templates.ana.field_2 = '<text class="field_2"  style="font-size: 14px;" fill="#ffffff" x="125" y="70" text-anchor="middle">{val}</text>';
  OrgChartJS.templates.ana.field_3 = '<text class="field_3"  style="font-size: 14px;" fill="#ffffff" x="125" y="90" text-anchor="middle">{val}</text>';

  return  <OrgChartReact 
            data={[
              { id: "1", name: "Amber McKenzie", title: "CEO", phone: "878 108 255", email: "amber.mcKenzie@gmail.com" },
              { id: "2", pid: "1", name: "Ava Field", title: "IT Manager", phone: "554 484 126", email: "ava.field@live.com" },
              { id: "3", pid: "1", name: "Peter Stevens", title: "HR Manager", phone: "897 112 444" }
            ]}  
            nodeBinding={{ field_0: 'name', field_1: 'title', field_2: 'phone', field_3: 'email'     }}>
          </OrgChartReact>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);