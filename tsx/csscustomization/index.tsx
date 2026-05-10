import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, Template } from "balkan-orgchart-react";
import "./style.css";

export const ChartExample = () => {
  

        

  return  <div style={{ width: "100%", height: "100%" }}>
  <OrgChartReact template='myTemplate1'   
  
            data={[
              { id: 1, name: "Amber McKenzie", title: "CEO", img: "https://cdn.balkan.app/shared/1.jpg" },
              { id: 2, pid: 1, name: "Ava Field", title: "IT Manager", img: "https://cdn.balkan.app/shared/2.jpg", mobile: "0878108255" },
              { id: 3, pid: 1, name: "Peter Stevens", title: "HR Manager", img: "https://cdn.balkan.app/shared/3.jpg" },
              { id: 4, pid: 3, name: "Avery Woods", title: "HR", img: "https://cdn.balkan.app/shared/4.jpg", tags: ["red"] }
            ]}  
            nodeBinding={{ field_0: 'name', field_1: 'title' }}
            nodeMenu={{
              details: { text: "Details" },
              edit: { text: "Edit" },
              add: { text: "Add" },
              remove: { text: "Remove" }}}
            >
          </OrgChartReact>
          <Template name='myTemplate1' nodeWidth={200} nodeHeight={100} baseTemplateName='ana' renderNode={(node, data) => {
          return <>
            <rect x="0" y="0" height={node.h} width={node.w} fill="#fff" stroke="#aeaeae" strokeWidth={1}  rx={10} ry={10}> </rect>

            <text className="field_0" x={node.w ? node.w  / 2 : 0} y={node.h ? node.h  / 2 + 10: 0}  fill="#aeaeae" fontSize="20" textAnchor="middle">
                {data.employeeName}
            </text>     
            <text className="field_1" x={node.w ? node.w  / 2 : 0} y={node.h ? node.h  / 2 + 60: 0}  fill="#aeaeae" fontSize="16" textAnchor="middle">
                {data.employeeTitle}
            </text>                      
          </>
        }}>
      </Template>
          </div>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);