import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";

export const ChartExample = () => {

const chartRef = React.useRef<OrgChartJS>(null);

function iterate(c: OrgChartJS, n: any, collapseIds: number[], id: number) {
    if (id != n.id) {
        collapseIds.push(n.id);
    }

    for (var i = 0; i < n.childrenIds.length; i++) {
        iterate(c, c.getNode(n.childrenIds[i]), collapseIds, id)
    }
}

function collapseAll(args: any) {
  if (args.collapsing) {
    const chart = chartRef.current;
    if (!chart) return;
    let id = args.id;
    let node = chart.getNode(id);
    let collapseIds: number[] = [];
    iterate(chart, node, collapseIds, id);
    chart.expandCollapse(id, [], collapseIds);
  };
    
};

  return  <>
          <OrgChartReact 
            ref={chartRef}
            data={[
              { id: 1 },
              { id: 2, pid: 1 },
              { id: 3, pid: 1 },
              { id: 4, pid: 2 },
              { id: 5, pid: 2 },
              { id: 6, pid: 3 },
              { id: 7, pid: 3 },
              { id: 8, pid: 4 }
            ]} 
            nodeBinding={{
              field_0: "id",
              field_1: "pid",
            }}
            onExpandCollapseButtonClick={args => collapseAll(args)}>
          </OrgChartReact>
          </>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);