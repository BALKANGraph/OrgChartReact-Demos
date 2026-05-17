import React, { useRef } from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, Employee, OrgChartJS } from "balkan-orgchart-react";

export const ChartExample = () => {
  const chartRef = useRef<OrgChartJS>(null);

  function visio() {
    chartRef.current?.exportToVisio({
        fileName: "myChart.vsdx",
        padding: 50,
        margin: [50, 10, 10, 10],
        expandChildren: true,
    });
}

  return  <OrgChartReact ref={chartRef}
            nodeBinding={{ field_0: 'name', field_1: 'title' }}
            collapse={{level: 2}}
            menu={{
                export_visio: {
                    text: "Export to Visio",
                    icon: OrgChartJS.icon.visio(24, 24, "#7A7A7A"),
                    onClick: visio
                },
            }}
            enableSearch={false}
          >
            <Employee
              name="Billy Moore"
              title="CEO"
            >
              <Employee
                name="Billie Rose"
                title="Dev Team Lead"
              />

              <Employee
                name="Glenn Bell"
                title="HR"
              >
                <Employee
                  name="Blair Francis"
                  title="HR"
                />
              </Employee>
            </Employee>
          </OrgChartReact>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);