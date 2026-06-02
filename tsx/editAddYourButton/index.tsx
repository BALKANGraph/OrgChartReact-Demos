import React, { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";

export const ChartExample = () => {

  let mapIcon = `<svg width="24" height="24" viewBox="0 0 490 490" >
            <polygon fill="#fff" points="320.217,101.428 171.009,5.241 171.009,392.966 320.217,485.979 	"/>
            <polygon fill="#fff" points="335.529,99.857 335.529,484.679 490,391.948 490,0 	"/>
            <polygon fill="#fff" points="155.697,3.659 0,82.979 0,490 155.697,392.942 	"/>
        </svg>`;

  const chartRef = useRef<OrgChartJS>(null);

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart?.editUI) return;

    const onElementBtnClick = (sender: unknown, args: any) => {
      if (args.name == 'map') {
        var data = chart.get(args.nodeId);
        window.open(data.map);
      }
    };

    chart.editUI.on('button-click', onElementBtnClick);
  }, []);

  return  <OrgChartReact 
            ref={chartRef}
            editForm={{
              buttons: {
                  map: {
                      icon: mapIcon,
                      text: 'Map'
                  },
                  edit: null,
                  share: null,
                  pdf: null,
                  remove: null
              }
            }}
            data={[
              { id: 1, city: "Berlin", map: 'https://goo.gl/maps/eTRXHvSS5JCrzjwMA' },
              { id: 2, pid: 1, city: "London", map: 'https://goo.gl/maps/hNftWNiq4pSLwNot9' },
              { id: 3, pid: 1, city: "Paris", map: 'https://goo.gl/maps/U6nx6TZUtBuzBvFH7' }
            ]}  
            nodeBinding={{
              field_0: "city",
            }}>
          </OrgChartReact>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);