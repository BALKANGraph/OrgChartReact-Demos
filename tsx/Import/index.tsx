import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";

export const ChartExample = () => {
  return  <OrgChartReact 
            nodeBinding={{ field_0: 'name', field_1: 'title' }}
            menu={{ 
              xml_export: { text: "Export XML" },
              csv_export: { text: "Export CSV" },
              json_export: { text: "Export JSON" },
              jsonImport: { text: "Import JSON", icon: OrgChartJS.icon.json(24, 24, 'red'), onClick: importJSONHandler },
              xmlImport: { text: "Import XML", icon: OrgChartJS.icon.xml(24, 24, 'red'), onClick: importXMLHandler },
              csvImport: { text: "Import CSV", icon: OrgChartJS.icon.csv(24, 24, 'red'), onClick: importCSVHandler }
             }}
            enableSearch={false}
            data={[
              { id: 1, name: "Billy Moore", title: "CEO" },
              { id: 2, pid: 1, name: "Billie Rose", title: "Dev Team Lead" },
              { id: 3, pid: 1, name: "Glenn Bell", title: "HR" },
              { id: 4, pid: 3, name: "Blair Francis", title: "HR" }
            ]}
          >
           
          </OrgChartReact>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);