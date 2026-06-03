import React, { useRef, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";

function ChartExample() {

  const chartRef = useRef<OrgChartJS>(null);

  useEffect(() => {
    const chart = chartRef.current;
    if (chart) {
      chart.undoRedoUI.onChange(function(args){        
        const btn_undo = document.getElementById("btn_undo") as HTMLButtonElement;
        const btn_redo = document.getElementById("btn_redo") as HTMLButtonElement;
        btn_undo.innerHTML = `undo (${args.undoStepsCount})`;          
        btn_redo.innerHTML = `redo (${args.redoStepsCount})`;        
        btn_undo.disabled = args.undoStepsCount == 0;
        btn_redo.disabled = args.redoStepsCount == 0;
        return false;
      });
    }
  }, []);
  return (
    <>
      <div id="buttons">
        <button id="btn_undo" onClick={() => chartRef.current?.undo()}>Undo</button>
        <button id="btn_redo" onClick={() => chartRef.current?.redo()}>Redo</button>
      </div>
      <OrgChartReact
        ref={chartRef}
        undoRedoStorageName="undoRedoStorage"
        onUpdated={function (this: any) {
          console.log("Updated data:", this.config.data);
          //post config data to your server

          // this.config.data
          // this.config.slinks
          // ...
        }}
        nodeBinding={{ field_0: "name", field_1: "title", img_0: "img" }}
        style={{ width: "100%", height: "100%" }}
        data={[
          { id: 1, name: "Denny Curtis" },
          { id: 2, pid: 1, name: "Ashley Barnett" },
          { id: 3, pid: 1, name: "Caden Ellison" }
        ]}
        nodeMenu={{
          add: {text: 'Add'},
          edit: {text: 'Edit'},
          remove: {text: 'Remove'},
        }}
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