import React, { useRef } from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, Employee, OrgChartJS } from "balkan-orgchart-react";

export const ChartExample = () => {
  const chartRef = useRef<OrgChartJS>(null);

  const handleExport = () => {    
    if (chartRef.current) {
      alert(123);
      chartRef.current.exportToPDF(); 
    }
  };

  return (
    <>      
      <button onClick={handleExport} style={{ fontSize: "24px"}}>Export PDF</button>

      <OrgChartReact  ref={chartRef} nodeBinding={{ field_0: "name", field_1: "title", img_0: "photo" }} >
        <Employee name="Denny Curtis" title="CEO" photo="https://cdn.balkan.app/shared/a/6.jpg">
          <Employee name="Lexie Cole" title="QA Lead" />
          <Employee name="Janae Barrett" title="Technical Director" />
          <Employee name="Aaliyah Webb" title="Assistant" />
        </Employee>
      </OrgChartReact>
    </>
  );
};

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);