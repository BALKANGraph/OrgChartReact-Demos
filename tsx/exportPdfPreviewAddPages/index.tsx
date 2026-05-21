import React, { useRef } from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS} from "balkan-orgchart-react";

export const ChartExample = () => {

  const chartRef = useRef<OrgChartJS>(null);
  
  function pdfPreview() {
    chartRef.current?.pdfPreviewUI.show({
      pages: [
        {
          nodeId: 2
        },
        {
          nodeId: 3,
          childLevels: 1
        },
        {
          nodeId: 4
        },
      ]
    });
  }
  
  return  <OrgChartReact 
            ref={chartRef}
            nodeBinding={{ field_0: 'name', field_1: 'title' }}
            menu={{ 
              previewPdf: { text: "Export PDF", icon: OrgChartJS.icon.pdf(24, 24, "#7A7A7A"), onClick: pdfPreview }
            }}
            enableSearch={false}
            data={[
              { id: 1, name: "Jack Hill", title: "Chairman & CEO" },
              { id: 2, pid: 1, name: "Lexie Cole", title: "QA Lead" },
              { id: 3, pid: 1, name: "Janae Barrett", title: "Technical Director" },
              { id: 4, pid: 1, name: "Aaliyah Webb", title: "Manager" },
              { id: 5, pid: 2, name: "Elliot Ross", title: "QA" },
              { id: 6, pid: 2, name: "Anahi Gordon", title: "QA" },
              { id: 8, pid: 3, name: "Nash Ingram", title: ".NET Team Lead" },
              { id: 9, pid: 3, name: "Sage Barnett", title: "JS Team Lead" },
              { id: 10, pid: 8, name: "Alice Gray", title: "Programmer" },
              { id: 12, pid: 9, name: "Reuben Mcleod", title: "Programmer" },
              { id: 13, pid: 9, name: "Ariel Wiley", title: "Programmer" },
              { id: 14, pid: 4, name: "Lucas West", title: "Marketer" }
            ]}
          >
           
          </OrgChartReact>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);