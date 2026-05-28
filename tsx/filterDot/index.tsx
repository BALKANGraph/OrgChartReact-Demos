import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact } from "balkan-orgchart-react";

export const ChartExample = () => {

  return  <OrgChartReact 
            filterBy={{
              title: {
                  'QA Lead': { checked: false, text: 'Leads not working'},
                  'Manager': { checked: false, text: 'Managets not working'},
                  'QA': { checked: true, text: 'QAs are working'},
              },
              name: {},
              city: {
                  'Sofia': { checked: false }
              }
            }}
            tags={{
              filter: {
                  template: 'dot'
              }
            }}
            data={[
              { id: "1", name: "Jack Hill", title: "Chairman and CEO", city: "London" },
              { id: "2", pid: "1", name: "Lexie Cole", title: "QA Lead", city: "London" },
              { id: "3", pid: "1", name: "Janae Barrett", title: "DEV Lead", city: "Sofia" },
              { id: "4", pid: "1", name: "Aaliyah Webb", title: "Manager", city: "London" },
              { id: "5", pid: "2", name: "Elliot Ross", title: "QA", city: "London" },
              { id: "6", pid: "2", name: "Anahi Gordon", title: "QA", city: "London" },
              { id: "7", pid: "2", name: "Knox Macias", title: "QA", city: "London" },
              { id: "8", pid: "3", name: "Nash Ingram", title: ".NET Team Lead", city: "Sofia"},
              { id: "9", pid: "3", name: "Sage Barnett", title: "JS Team Lead", city: "Sofia" },
              { id: "10", pid: "8", name: "Alice Gray", title: "Programmer", city: "Sofia" },
              { id: "11", pid: "8", name: "Anne Ewing", title: "Programmer", city: "Sofia" },
              { id: "12", pid: "9", name: "Reuben Mcleod", title: "Programmer", city: "Sofia" },
              { id: "13", pid: "9", name: "Ariel Wiley", title: "Programmer", city: "Sofia" },
              { id: "14", pid: "4", name: "Lucas West", title: "Marketer", city: "London" },
              { id: "15", pid: "4", name: "Adan Travis", title: "Designer", city: "London" },
              { id: "16", pid: "4", name: "Alex Snider", title: "Sales Manager", city: "London" }
            ]}  
            nodeBinding={{ field_0: 'name', field_1: 'title', field_2: 'phone', field_3: 'email'     }}>
          </OrgChartReact>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);