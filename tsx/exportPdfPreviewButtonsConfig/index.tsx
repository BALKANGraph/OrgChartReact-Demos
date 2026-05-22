import React, { useRef } from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";

export const ChartExample = () => {

  const chartRef = useRef<OrgChartJS>(null);

  if (chartRef.current) {
    chartRef.current.pdfPreviewUI.buttons.addNewPage = true;
    chartRef.current.pdfPreviewUI.buttons.childLevels = true;
    chartRef.current.pdfPreviewUI.buttons.landscapePortrait = true;
    chartRef.current.pdfPreviewUI.buttons.parentLevels = true;
    chartRef.current.pdfPreviewUI.buttons.printProfileOrTree = true;
    chartRef.current.pdfPreviewUI.buttons.removePage = true;
  }

  const handleInit = () => {
    if (chartRef.current) {
        chartRef.current.pdfPreviewUI.show({});
    }
  }

  return  <OrgChartReact 
            ref={chartRef}  
            nodeBinding={{ field_0: 'name', field_1: 'title' }}
            enableSearch={false}
            onInit={handleInit}
            data={[
              { id: 1, name: "Denny Curtis" },
              { id: 2, pid: 1, name: "Ashley Barnett" },
              { id: 3, pid: 1, name: "Caden Ellison" }
            ]}
          >
           
          </OrgChartReact>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);