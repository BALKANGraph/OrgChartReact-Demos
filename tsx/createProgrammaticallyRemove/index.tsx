import React, { useRef } from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS} from "balkan-orgchart-react";

function ChartExample() {

  const chartRef = useRef<OrgChartJS>(null);

  return (
    <>
      <button onClick={(event) => {
        chartRef.current?.remove(2);
        chartRef.current?.draw();
        (event.target as HTMLButtonElement).style.display = "none";
      }}>remove</button>
      <OrgChartReact ref={chartRef} 
        nodeBinding={{
          field_0: "name",
          field_1: "title"
        }}
        data={[
          { id: 1, name: "Denny Curtis", title: "CEO" },
          { id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager" },
          { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager" },
          { id: 4, pid: 2, name: "Lynn Hussain", title: "Sales" },
          { id: 5, pid: 3, name: "Tanner May", title: "Developer" }
        ]}
      >
     </OrgChartReact>
    </>
  )
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);