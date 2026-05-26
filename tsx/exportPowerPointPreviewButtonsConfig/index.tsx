import React, { useRef } from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";

export const ChartExample = () => {

  const chartRef = useRef<OrgChartJS>(null);

  if (chartRef.current) {
    chartRef.current.powerPointPreviewUI.buttons.addNewPage = true;
    chartRef.current.powerPointPreviewUI.buttons.childLevels = true;
    chartRef.current.powerPointPreviewUI.buttons.parentLevels = true;
    chartRef.current.powerPointPreviewUI.buttons.removePage = true;
  }

  const handleInit = () => {
    if (chartRef.current) {
        chartRef.current.powerPointPreviewUI.show({
          pages: [
              {nodeId: 1}
          ]
        });
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