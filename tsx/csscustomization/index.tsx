import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, Employee, Template } from "balkan-orgchart-react";
import "./style.css";

export const ChartExample = () => {
  

        

  return  <div style={{ width: "100%", height: "100%" }}>
  <OrgChartReact template='myTemplate1'   
            nodeMenu={{
              details: { text: "Details" },
              edit: { text: "Edit" },
              add: { text: "Add" },
              remove: { text: "Remove" }}}
            >
          <Template name='myTemplate1' nodeWidth={200} nodeHeight={100} baseTemplateName='ana' renderNode={(node, data) => {
          return <>
            <rect x="0" y="0" height={node.h} width={node.w} fill="#fff" stroke="#aeaeae" strokeWidth={1}  rx={10} ry={10}> </rect>

            {data.img ? (
              <image
                x={10}
                y={10}
                width={36}
                height={36}
                href={data.img}
                preserveAspectRatio="xMidYMid slice"
              />
            ) : null}

            <text className="field_0" x={node.w ? node.w  / 2 : 0} y={node.h ? node.h  / 2 + 30: 0} fontSize="20" textAnchor="middle">
              {data.field_0 ?? data.employeeName}
            </text>     
            <text className="field_1" x={node.w ? node.w - 10 : 0} y={20} fontSize="16" textAnchor="end">
              {data.field_1 ?? data.title}
            </text>                      
          </>
        }}>
      </Template>

<Employee employeeName="Amber McKenzie" title="CEO" img="https://cdn.balkan.app/shared/1.jpg">
  <Employee
    employeeName="Ava Field"
    title="IT Manager"
    img="https://cdn.balkan.app/shared/2.jpg"
    mobile="0878108255"
  />
  
  <Employee
    employeeName="Peter Stevens"
    title="HR Manager"
    img="https://cdn.balkan.app/shared/3.jpg"
  >
    <Employee
      employeeName="Avery Woods"
      title="HR"
      img="https://cdn.balkan.app/shared/4.jpg"
      tags={["red"]}
    />
  </Employee>
</Employee>

          </OrgChartReact>


      
          </div>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);