import React, { useRef } from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";

export const ChartExample = () => {
  const chartRef = useRef<OrgChartJS>(null);

  function visio() {
    chartRef.current?.exportToVisio({
        fileName: "myChart.vsdx",
        padding: 50,
        margin: [50, 10, 10, 10],
        expandChildren: true,
        header: '<text x="30">My Header</text>',
        footer: '<text>My Footer. Page {current-page} of {total-pages}</text>'
    });
}

  return  <OrgChartReact ref={chartRef}
            nodeBinding={{ field_0: 'name', field_1: 'title', img_0: 'img' }}
            collapse={{level: 2}}
            template="ula"
            menu={{
                export_visio: {
                    text: "Export to Visio",
                    icon: OrgChartJS.icon.visio(24, 24, "#7A7A7A"),
                    onClick: visio
                },
            }}
            enableSearch={false}
            data={[
              { id: 1, name: "Billy Moore", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
              { id: 2, pid: 1, name: "Billie Rose", title: "Dev Team Lead", img: "https://cdn.balkan.app/shared/5.jpg" },
              { id: 3, pid: 1, name: "Glenn Bell", title: "HR", img: "https://cdn.balkan.app/shared/10.jpg" },
              { id: 4, pid: 3, name: "Blair Francis", title: "HR", img: "https://cdn.balkan.app/shared/11.jpg" }
            ]}
          >
          </OrgChartReact>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);