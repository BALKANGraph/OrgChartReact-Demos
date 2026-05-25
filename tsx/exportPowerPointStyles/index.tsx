import React, { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";

export const ChartExample = () => {

  const chartRef = useRef<OrgChartJS>(null);
  const exportStyles = document.getElementById("myStyles")?.outerHTML || "";

  useEffect(() => {
    chartRef.current?.onExportStart((args) => {
      args.styles += exportStyles;
    });
  }, []);

  return  <OrgChartReact ref={chartRef}
            nodeBinding={{ field_0: 'name', field_1: 'title' }}
            menu={{ pp_export: { text: "Export PowerPoint" } }}
              enableSearch={false}
              data={[
                { id: 1, name: "Billy Moore", title: "CEO" },
                { id: 2, pid: 1, name: "Billie Rose", title: "Dev Team Lead" },
                { id: 3, pid: 1, name: "Glenn Bell", title: "HR", tags: ['HR'] },
                { id: 4, pid: 3, name: "Blair Francis", title: "HR", tags: ['HR'] }
              ]}
          >
          </OrgChartReact>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);