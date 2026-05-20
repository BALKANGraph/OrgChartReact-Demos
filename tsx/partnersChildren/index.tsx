import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact } from "balkan-orgchart-react";

function ChartExample() {
  return (
    <OrgChartReact
      nodeBinding={{ field_0: "id" }}
      style={{ width: "100%", height: "100%" }}
      enableSearch={false}
      data={[
        { id: 1 },
        { id: 2, pid: 1, tags: ["partner"] },
        { id: 3, pid: 1, tags: ["partner"] },
        { id: 4, pid: 1, ppid: 2 },
        { id: 5, pid: 1, ppid: 3 }
      ]}
    >

    </OrgChartReact>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);