import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, Employee } from "balkan-orgchart-react";

function ChartExample() {
  return (
      <OrgChartReact
        nodeBinding={{ field_0: "name", field_1: "title" }}
        style={{ width: "100%", height: "100%" }}
      >
        <Employee name="Denny Curtis" title="CEO">
          <Employee name="Lexie Cole" title="QA Lead" />
          <Employee name="Janae Barrett" title="Technical Director" />
        </Employee>
      </OrgChartReact>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);