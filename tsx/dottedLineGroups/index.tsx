import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact } from "balkan-orgchart-react";

export const ChartExample = () => {
  return  <OrgChartReact 
            template={"olivia"}
            groupDottedLines={[
              { from: 5, to: 2 }
            ]}
            tags={{
              "group-dotted-lines": {
                  min: false,
                  template: "group_dotted_lines"
              }
            }}
            data={[
              { id: 1, name: "Jack Hill", title: "CEO", email: "amber@domain.com", img: "https://cdn.balkan.app/shared/a/1.jpg" },
              { id: 2, pid: 1, name: "Lexie Cole", title: "Sales Director", email: "ava@domain.com", img: "https://cdn.balkan.app/shared/a/2.jpg" },
              { id: 3, pid: 1, name: "Aaliyah Webb", title: "IT Director", email: "jay@domain.com", img: "https://cdn.balkan.app/shared/a/4.jpg" },
              { id: 4, pid: 3, name: "Elliot Ross", title: "Dev Team Lead", img: "https://cdn.balkan.app/shared/a/5.jpg" },
              { id: 5, pid: 3, name: "Anahi Gordon", title: "QA Manager", img: "https://cdn.balkan.app/shared/a/6.jpg" }
            ]}  
            nodeBinding={{ field_0: 'name', field_1: 'title', field_2: 'email', img_0: 'img' }}>
          </OrgChartReact>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);