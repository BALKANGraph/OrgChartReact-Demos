import React, { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";

function ChartExample() {

  const chartref = useRef<OrgChartJS>(null);

  function loadNodesFromServer(nodeIds: any[], callback: (nodes: any[] | null) => void) {
    const fetchPromises = nodeIds.map(nodeId => {
      return fetch(`https://balkan.app/content/ondemand/${nodeId}.json`).then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status} for URL: https://balkan.app/content/ondemand/${nodeId}.json`);
        }
        return response.json();
      });
    });

    Promise.all(fetchPromises)
      .then(results => {
        callback(results);
      })
      .catch(error => {
        callback(null);
      });
  }

  const nodes = [50, 56, 119, 788, 931];

  useEffect(() => {
    loadNodesFromServer(nodes, function(nodes){
      if (nodes) {
        chartref.current?.load(nodes);
      }  
    });
  }, []);


  return  <OrgChartReact 
            ref={chartref}
            template="emily"
            nodeBinding={{
              name: 'name',
              title: 'title',
              email: 'email',        
              address: 'address',
              description: 'description',
              img_0: 'img'
            }}
     
             onDemand={(args) => {
                loadNodesFromServer(args.ids, (nodes: any[] | null) => {
                  if (nodes) {
                    console.log("Loaded nodes from server:", nodes);
                    chartref.current?.addNodes(args.id, nodes, () => {
                      chartref.current?.moveNodesToVisibleAreaAfterExpand(
                        args.id,
                        args.ids
                      );
                    });
                  }
                });
              }}>

          </OrgChartReact>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);