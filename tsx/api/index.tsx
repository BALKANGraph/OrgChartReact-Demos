import React, { useRef } from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";

export const ChartExample = () => {
  const chartRef = useRef<OrgChartJS>(null);

  const handleExport = () => {    
    if (chartRef.current) {
      chartRef.current.exportToPDF(); 
    }
  };

  return (
    <>      
      <button onClick={handleExport} style={{ fontSize: "24px"}}>Export PDF</button>

      <OrgChartReact  ref={chartRef} 
        nodeBinding={{ field_0: "name", field_1: "title", img_0: "photo" }} 
        data={[
            { id: 1, name: "Billy Moore", title: "CEO" },
            { id: 2, pid: 1, name: "Billie Rose", title: "Dev Team Lead" },
            { id: 3, pid: 1, name: "Glenn Bell", title: "HR" },
            { id: 4, pid: 3, name: "Blair Francis", title: "HR" }
        ]}
      >
      </OrgChartReact>
    </>
  );
};

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);