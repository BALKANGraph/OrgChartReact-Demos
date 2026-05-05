import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact } from "balkan-orgchart-react";

function ChartExample() {

  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        setJsonData(data)
      })
      .catch((error) => {
        console.error('Error loading data:', error)
      })
  }, []);

  return  <OrgChartReact data={jsonData}  nodeBinding={{ field_0: 'name', field_1: 'title' }}></OrgChartReact>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);