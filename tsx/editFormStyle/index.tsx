import React, { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";

export const ChartExample = () => {


  return  <OrgChartReact 
            layout={OrgChartJS.layout.mixed}
            data={[
              { id: 1 },
              { id: 2, pid: 1, tags: ['yellow'] },
              { id: 3, pid: 1, tags: ['orange'] }
            ]}>
          </OrgChartReact>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);