import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";

function ChartExample() {
  const chartref = React.useRef<OrgChartJS>(null);
  return (
      <OrgChartReact
        ref={chartref}
        onInit={() => {
          chartref.current?.orgScribeUI.show();
        }}
        nodeBinding={{ field_0: "name", field_1: "title", img_0: "img" }}
        style={{ width: "100%", height: "100%" }}
        data={[
          { id: 1, name: "Amber McKenzie", title: "CEO" },
          { id: 2, pid: 1, name: "Ava Field", title: "IT Manager" },
          { id: 3, pid: 1, name: "Rhys Harper" }
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