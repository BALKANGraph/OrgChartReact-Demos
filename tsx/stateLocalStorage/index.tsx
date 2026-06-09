import React, { useRef } from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";

export const ChartExample = () => {

  const chart = useRef<OrgChartJS>(null);

  return (
    <>
    <button onClick={() => {
              let location = window.location + '?' + chart.current?.stateToUrl();
              window.open(location);
            }}>Open the same chart in different window
    </button>
    <OrgChartReact
      ref={chart}
      data={[
        { id: 0 },
        { id: 1, pid: 0 },
        { id: 2, pid: 0 },
        { id: 3, pid: 1 },
        { id: 4, pid: 2 },
        { id: 5, pid: 1 },
        { id: 6, pid: 2 }
      ]}
      state={{
        name: 'StateForMyOrgChart',
        readFromLocalStorage: true,
        writeToLocalStorage: true,       
      }}
      nodeBinding={{ field_0: "id"}}>
    </OrgChartReact>
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);