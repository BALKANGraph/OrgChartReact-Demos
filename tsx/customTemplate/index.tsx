import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, Employee, Template } from "balkan-orgchart-react";

function ChartExample() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <OrgChartReact template='myTemplate1'>      
        
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

      <Employee employeeName='Denny Curtis' >
        <Employee  employeeName='Lexie Cole'></Employee>
        <Employee  employeeName='Janae Barrett'  template='myTemplate2'></Employee>
        <Employee employeeName='Aaliyah Webb'></Employee>
      </Employee>
     </OrgChartReact>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);