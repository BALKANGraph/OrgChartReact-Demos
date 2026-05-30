import React, { useRef } from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS  } from "balkan-orgchart-react";

export const ChartExample = () => {

  const chart = useRef<OrgChartJS>(null);

  let expandUpIcon = '<svg width="32px" height="32px"><path stroke-width="3" fill="none" stroke="#757575" d="M8,16 L16,8 L24,16"></path><line x1="16" y1="8" x2="16" y2="24" stroke-width="3" stroke="#757575"></line></svg>';

  function expandUp() {
    if (!chart.current?.config?.roots?.[0]) return false;
    let id = chart.current.config.roots[0];
    let node = chart.current.getNode(id);
    if (!node) return false;
    if (!node.pid) return false;
    let pnode = chart.current.getNode(node.pid);
    if (pnode && !node.parent) {
        chart.current.config.roots = [pnode.id!];
        chart.current.draw(OrgChartJS.action.update, { id: node.id });
        chart.current.center(pnode.id!)
    }
    else if (node.parent) {
        if (node.id) {
            chart.current.config.roots = [node.id];
            chart.current.draw();
            console.log("else if");
        }
    }
    return false
}

  return  <OrgChartReact 
            ref={chart}
            controls={{
              pdf_export: { title: 'Export to PDF' },
              myControl: {
                  title: 'Expand Up',
                  icon: expandUpIcon,
                  onClick: expandUp
              },
            }}
            data={[
              { id: 1 },
              { id: 2, pid: 1 },
              { id: 3, pid: 1 },
              { id: 4, pid: 2 },
              { id: 5, pid: 2 }
            ]}  
            nodeBinding={{ field_0: 'id' }}
            roots={[2]}>
          </OrgChartReact>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);