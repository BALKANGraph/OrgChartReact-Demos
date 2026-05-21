import React, { useRef } from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS} from "balkan-orgchart-react";

export const ChartExample = () => {

  const chartRef = useRef<OrgChartJS>(null);
  
  function pdfPreview(id?: number) {

    chartRef.current?.pdfPreviewUI.show({
      pages: [
        {
          nodeId: id,
          isProfile: true
        }
      ]
    });
    
  }
  
  return  <OrgChartReact 
            ref={chartRef}
            nodeBinding={{ field_0: 'name', field_1: 'title' }}
            nodeMenu={{ 
              export_pdf: {
                  text: 'Profile Export',
                  icon: OrgChartJS.icon.pdf(24, 24, "#7A7A7A"),
                  onClick: pdfPreview
              }
            }}
            enableSearch={false}
            data={[
              { id: 1, name: "Billy Moore", title: "CEO" },
              { id: 2, pid: 1, name: "Billie Rose", title: "Dev Team Lead" },
              { id: 3, pid: 1, name: "Glenn Bell", title: "HR" },
              { id: 4, pid: 3, name: "Blair Francis", title: "HR" }
            ]}
          >
           
          </OrgChartReact>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);