import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, Template } from "balkan-orgchart-react";
import "./style.css";

export const ChartExample = () => {
  

        

  return <OrgChartReact id="tree" template='myTemplate1'   
            nodeMenu={{
              details: { text: "Details" },
              edit: { text: "Edit" },
              add: { text: "Add" },
              remove: { text: "Remove" }}}
            enableSearch={false}
            data={[
              {
                "id": 1,
                "employeeName": "Amber McKenzie",
                "title": "CEO",
                "img": "https://cdn.balkan.app/shared/1.jpg"
              },
              {
                "id": 2,
                "pid": 1,
                "employeeName": "Ava Field",
                "title": "IT Manager",
                "img": "https://cdn.balkan.app/shared/2.jpg",
                "mobile": "0878108255"
              },
              {
                "id": 3,
                "pid": 1,
                "employeeName": "Peter Stevens",
                "title": "HR Manager",
                "img": "https://cdn.balkan.app/shared/3.jpg"
              },
              {
                "id": 4,
                "pid": 3,
                "employeeName": "Avery Woods",
                "title": "HR",
                "img": "https://cdn.balkan.app/shared/4.jpg",
                "tags": ["red"]
              }
            ]}
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
    </OrgChartReact>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);