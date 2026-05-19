import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, Template } from "balkan-orgchart-react";

function ChartExample() {
  return (
      <OrgChartReact template='myTemplate1'
        data={[
        {
          "id": 1,
          "employeeName": "Denny Curtis"
        },
        {
          "id": 2,
          "pid": 1,
          "employeeName": "Lexie Cole"
        },
        {
          "id": 3,
          "pid": 1,
          "employeeName": "Janae Barrett",
          "template": "myTemplate2"
        },
        {
          "id": 4,
          "pid": 1,
          "employeeName": "Aaliyah Webb"
        }
      ]}
      >      
        <Template name='myTemplate1' nodeWidth={200} nodeHeight={100} baseTemplateName='ana' renderNode={(node, data) => {
            return <>
              <rect x="0" y="0" height={node.h} width={node.w} fill="#fff" stroke="#aeaeae" strokeWidth={1}  rx={10} ry={10}> </rect>

              <text x={node.w ? node.w  / 2 : 0} y={node.h ? node.h  / 2 + 10: 0}  fill="#aeaeae" fontSize="20" textAnchor="middle">
                  {data.employeeName}
              </text>                        
            </>
          }}>
        </Template>
        
        <Template name='myTemplate2' nodeWidth={500} nodeHeight={500}  baseTemplateName='myTemplate1'></Template>

     </OrgChartReact>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);