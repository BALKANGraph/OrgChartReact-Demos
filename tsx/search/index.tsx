import React, { useRef } from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";

export const ChartExample = () => {

  OrgChartJS.SEARCH_PLACEHOLDER = "Chercher";
  
  const chartRef = useRef<OrgChartJS>(null);

  const searchFunc = () => {
    if(chartRef.current) {
      let result = chartRef.current.search("Denny");
      chartRef.current.center(result[0].id);
    }
  }

  return <>
    <button onClick={searchFunc}>Search for Denny</button> 
    <OrgChartReact 
              ref={chartRef}
              data={[
                { id: 1, name: "Denny Curtis", title: "CEO" },
                { id: 2, pid: 1, name: "Ashley Barnett", title: "Denny Curtis" },
                { id: 3, pid: 1, name: "Caden Ellison", title: "Denny Curtis" },
              ]} 
              nodeBinding={{ field_0: 'name', field_1: 'title' }}>
            </OrgChartReact>
    </>

}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);