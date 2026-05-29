import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";

export const ChartExample = () => {
  return  <OrgChartReact 
            controls={{
              layout_mixed: { title: 'Layout Mixed', anchor: OrgChartJS.anchor.left},
              layout_tree: { title: 'Layout Tree', anchor: OrgChartJS.anchor.left},
              layout_normal: { title: 'Layout Normal', anchor: OrgChartJS.anchor.left},
              pdf_export: { title: 'Export to PDF', anchor: OrgChartJS.anchor.right },
              full_screen: { title: 'Fill Screem', anchor: OrgChartJS.anchor.right, isOn: false },
              myControl: { title: 'My Control', anchor: OrgChartJS.anchor.right, 
                onClick: function(){
                  alert('My Control 1 clicked')
                }
              },
            }}
            data={[
              { id: 1, name: "Denny Curtis" },
              { id: 2, pid: 1, name: "Ashley Barnett" },
              { id: 3, pid: 1, name: "Caden Ellison" }
            ]}  
            nodeBinding={{ field_0: 'name', field_1: 'title' }}>
          </OrgChartReact>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);