import React, { useRef } from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, Employee, OrgChartJS } from "balkan-orgchart-react";

export const ChartExample = () => {
  const chartRef = useRef<OrgChartJS>(null);

  function ppt() {
    chartRef.current?.exportToPowerPoint({
        format: "Widescreen"
    });
}

  return  <OrgChartReact ref={chartRef}
            nodeBinding={{ field_0: 'name', field_1: 'title' }}
            menu={{
                export_ppt: {
                    text: "Export to PowerPoint",
                    icon: OrgChartJS.icon.powerpoint(24, 24, "#7A7A7A"),
                    onClick: ppt
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