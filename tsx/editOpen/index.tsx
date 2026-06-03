import React, { useRef } from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";

export const ChartExample = () => {

  const chartRef = useRef<OrgChartJS>(null);
  return  <OrgChartReact 
            ref={chartRef}
            onNodeClick={(args) => {
              if (args.node.id !== undefined) {
                chartRef.current?.editUI.show(args.node.id, false); // opens the edit form in edit mode
              }
              // chartRef.current?.editUI.show(args.node.id, true); // details mode
              return false; // cancel the click event
            }}
            // nodeMouseClick={OrgChartJS.action.edit} // edit mode
            // nodeMouseClick={OrgChartJS.action.details} // details mode
            // nodeMouseClick={OrgChartJS.action.none} // prevent opening
            data={[
              { id: "1", EmployeeName: "Jack Hill", Title: "Chairman and CEO", Email: "amber@domain.com", ImgUrl: "https://cdn.balkan.app/shared/16.jpg", tags: ['orange'] },
              { id: "2", pid: "1", EmployeeName: "Lexie Cole", Title: "QA Lead", Email: "ava@domain.com", ImgUrl: "https://cdn.balkan.app/shared/2.jpg" },
              { id: "3", pid: "1", EmployeeName: "Janae Barrett", Title: "Technical Director", ImgUrl: "https://cdn.balkan.app/shared/3.jpg" },
            ]}  
            nodeBinding={{
              field_0: "EmployeeName",
              field_1: "Title",
              img_0: "ImgUrl"
            }}
            nodeMenu={{
              details: { text: "Details" },
              edit: { text: "Edit" },
              add: { text: "Add" },
              remove: { text: "Remove" }
            }}>
          </OrgChartReact>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);