import React, { useRef } from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";



export const ChartExample = () => {
  OrgChartJS.SLINK_GAP = 10;
  return (
    <>
    <OrgChartReact 
      siblingSeparation={60}
      nodeBinding={{ field_0: "id" }}
      data={[
        { id: 1 },
        { id: 2, pid: 1 },
        { id: 3, pid: 2 },
        { id: 4, pid: 3 },
        { id: 5, pid: 4 },
        { id: 6, pid: 3 },
        { id: 7, pid: 2 },
        { id: 8, pid: 7 },
        { id: 9, pid: 8 }
      ]}
      slinks={[
        { from: 6, to: 5 },
        { from: 8, to: 5 },
        { from: 1, to: 3 },
        { from: 1, to: 7 },
        { from: 1, to: 8 },
        { from: 1, to: 6 }
    ]}
    >
    </OrgChartReact>
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);