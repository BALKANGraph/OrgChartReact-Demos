import React, { useRef } from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";
import "./style.css";



export const ChartExample = () => {

  const chartRef = useRef<OrgChartJS>(null);

  const add6to0 = () => {
    chartRef.current?.addSlink(6, 0, 'text').draw();
  };
  const add5to1 = () => {
    chartRef.current?.addSlink(5, 1, 'lorem ipsum', 'blue').draw();
  };
  const remove6to0 = () => {
    chartRef.current?.removeSlink(6, 0).draw();
  };
  const remove5to1 = () => {
    chartRef.current?.removeSlink(5, 1).draw();
  };

  return (
    <>
    <div id="buttons">
      <button onClick={add6to0}>Add slink from 6 to 0</button>
      <button onClick={add5to1}>Add slink from 5 to 1</button>
      <button onClick={remove6to0}>Remove slink from 6 to 0</button>
      <button onClick={remove5to1}>Remove slink from 5 to 1</button>
    </div>

    <OrgChartReact ref={chartRef}
      data={[
        { id: 0 },
        { id: 1, pid: 0 },
        { id: 2, pid: 0 },
        { id: 3, pid: 1 },
        { id: 4, pid: 2 },
        { id: 5, pid: 1 },
        { id: 6, pid: 2 }
      ]}
      nodeBinding={{ field_0: "name", field_1: "title" }}
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