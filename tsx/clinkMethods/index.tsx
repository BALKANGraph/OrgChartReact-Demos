import React, { useRef } from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";
import "./style.css";

export const ChartExample = () => {

  const chartRef = useRef<OrgChartJS>(null);

  const add4to0 = () => {
    chartRef.current?.addClink(4, 0, 'text').draw();
  };
  const add4to5 = () => {
    chartRef.current?.addClink(4, 5, '4 reports to 3', 'blue').draw();
  };
  const add2to6 = () => {
    chartRef.current?.addClink(2, 6, 'lorem ipsum', 'yellow').draw();
  };
  const remove4to0 = () => {
    chartRef.current?.removeClink(4, 0).draw();
  };
  const remove4to5 = () => {
    chartRef.current?.removeClink(4, 5).draw();
  };
  const remove2to6 = () => {
    chartRef.current?.removeClink(2, 6).draw();
  };  

  return <>
      <div id="buttons">
        <button onClick={add4to0}>Add clink from 4 to 0</button>
        <button onClick={add4to5}>Add clink from 4 to 5</button>
        <button onClick={add2to6}>Add clink from 2 to 6</button>
        <button onClick={remove4to0}>Remove clink from 4 to 0</button>
        <button onClick={remove4to5}>Remove clink from 4 to 5</button>
        <button onClick={remove2to6}>Remove clink from 2 to 6</button>
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
      nodeBinding={{ field_0: 'name', field_1: 'title' }}>
    </OrgChartReact>
  </>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);