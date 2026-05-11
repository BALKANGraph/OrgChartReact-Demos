import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";

export const ChartExample = () => {
  OrgChartJS.templates.ana.img_0 = '<image preserveAspectRatio="xMidYMid slice" xlink:href="{val}" x="20" y="-15" width="80" height="80"></image>';
  OrgChartJS.templates.ana.img_1 = '<image preserveAspectRatio="xMidYMid slice" xlink:href="{val}" x="150" y="-15" width="80" height="80"></image>';

    return  <OrgChartReact 
            data={[
              { id: "1", name: "Management Team", photo1: "https://cdn.balkan.app/shared/1.jpg", photo2: "https://cdn.balkan.app/shared/4.jpg" },
              { id: "2", pid: "1", name: "IT Team", photo1: "https://cdn.balkan.app/shared/2.jpg", photo2: "https://cdn.balkan.app/shared/5.jpg" },
              { id: "3", pid: "1", name: "Marketing Team", photo1: "https://cdn.balkan.app/shared/3.jpg", photo2: "https://cdn.balkan.app/shared/6.jpg" }
            ]}  
            nodeBinding={{ field_0: 'name', img_0: "photo1", img_1: "photo2" }}>
          </OrgChartReact>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);