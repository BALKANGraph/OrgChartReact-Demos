import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact } from "balkan-orgchart-react";

export const ChartExample = () => {

  return <>
    <OrgChartReact 
      controls={{
        zoom_in: { title: "Zoom In"},
        zoom_out: { title: "Zoom Out"}
      }}
      data={[
        { id: 1 },
        { id: 2, pid: 1 },
        { id: 3, pid: 1 }
      ]}>
    </OrgChartReact>
  </>

}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);