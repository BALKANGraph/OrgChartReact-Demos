import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, Employee } from "balkan-orgchart-react";

function ChartExample() {
  return (
    <OrgChartReact
      nodeBinding={{ field_0: "id" }}
      style={{ width: "100%", height: "100%" }}
      enableSearch={false}
    >
      
    <Employee>
      <Employee partner={true} />
      <Employee />
      <Employee />
    </Employee>

    </OrgChartReact>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);