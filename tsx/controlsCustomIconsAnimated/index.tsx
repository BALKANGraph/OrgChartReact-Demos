import React, { useRef } from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS  } from "balkan-orgchart-react";

export const ChartExample = () => {

  const chart = useRef<OrgChartJS>(null);

  let exportIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 14V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V14" 
                            stroke="#F57C00" 
                            stroke-width="2" 
                            stroke-linecap="round"/>

                      <g id="arrow-export">
                        <path d="M12 15V3M12 3L8 7M12 3L16 7" 
                              stroke="#F57C00" 
                              stroke-width="2" 
                              stroke-linecap="round" 
                              stroke-linejoin="round"/>
                        
                        <animateTransform 
                          attributeName="transform" 
                          type="translate" 
                          values="0 3; 0 -2; 0 3" 
                          dur="1.5s" 
                          repeatCount="indefinite" 
                          calcMode="spline" 
                          keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />
                        
                        <animate 
                          attributeName="opacity" 
                          values="0; 1; 0" 
                          dur="1.5s" 
                          repeatCount="indefinite" />
                      </g>
                    </svg>`;

  let plusIcon = `<i class="material-icons">add</i>`;
  let minusIcon = `<i class="material-icons">remove</i>`;

  return  <OrgChartReact 
            ref={chart}
            controls={{
              pdf_export: { title: 'Export to PDF', icon: exportIcon },
              zoom_in: { title: "Zoom In", icon: plusIcon},
              zoom_out: { title: "Zoom Out", icon: minusIcon}
            }}
            data={[
              { id: 1, name: "Denny Curtis" },
              { id: 2, pid: 1, name: "Ashley Barnett" },
              { id: 3, pid: 1, name: "Caden Ellison" }
            ]}  
            nodeBinding={{ field_0: 'name' }}>
          </OrgChartReact>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);