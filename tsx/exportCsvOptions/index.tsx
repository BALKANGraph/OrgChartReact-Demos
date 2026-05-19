import React, { useRef } from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, Employee, OrgChartJS } from "balkan-orgchart-react";


export const ChartExample = () => {
  const chart = useRef<OrgChartJS>();
  return  <OrgChartReact ref={chart}
            nodeBinding={{ field_0: 'name', field_1: 'title' }}
            menu={{
                csv: {
                    text: 'Export CSV',
                    icon: OrgChartJS.icon.csv(24, 24, "#7A7A7A"),
                    onClick: function (id: string) {
                      chart.current?.exportToCSV({
                          filename: "myChart.CSV",
                          nodeId: id,
                      });
                  }
                },
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