import React, { useRef } from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS} from "balkan-orgchart-react";

function ChartExample() {

  const chartRef = useRef<OrgChartJS>(null);

  React.useEffect(() => {
    chartRef.current?.add({ id: 1, name: "Denny Curtis", title: "CEO" })
      .add({ id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager" })
      .add({ id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager" })
      .add({ id: 4, pid: 2, name: "Elliot Patel", title: "Sales" })
      .add({ id: 5, pid: 3, name: "Tanner May", title: "Developer" });
    chartRef.current?.draw();
  }, []);

  return (
      <OrgChartReact ref={chartRef} 
        nodeBinding={{
          field_0: "name",
          field_1: "title"
        }}
      >
     </OrgChartReact>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);