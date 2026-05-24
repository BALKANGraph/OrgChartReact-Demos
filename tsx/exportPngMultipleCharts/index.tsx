import React, { useRef } from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";

export const ChartsExample = () => {
  const chart1Ref = useRef<OrgChartJS>(null);
  const chart2Ref = useRef<OrgChartJS>(null);
  const chart3Ref = useRef<OrgChartJS>(null);
  const chart4Ref = useRef<OrgChartJS>(null);

  function png() {
    chart1Ref.current?.exportToPNG({
        pages: [
          { chartInstance: chart1Ref.current || undefined, header: '<text>OrgChart 1</text>' },
          { chartInstance: chart2Ref.current || undefined, header: '<text>OrgChart 2</text>' },
          { chartInstance: chart3Ref.current || undefined, header: '<text>OrgChart 3</text>' },
          { chartInstance: chart4Ref.current || undefined, header: '<text>OrgChart 4</text>' }
        ]
    });
}

  const data = [
    { id: 1 },
    { id: 2, pid: 1 },
    { id: 3, pid: 1 }
  ];

  return (
    <table border={0} cellSpacing={0} cellPadding={0}>
      <tbody>
        <tr>
          <td className="chart">
            <div id="chart_1">
              <OrgChartReact
                ref={chart1Ref}
                orientation={OrgChartJS.orientation.right_top}
                scaleInitial={OrgChartJS.match.boundary}
                enableSearch={false}
                data={data}
              />
            </div>
          </td>
          <td className="chart">
            <div id="chart_2">
              <OrgChartReact
                ref={chart2Ref}
                orientation={OrgChartJS.orientation.left_top}
                scaleInitial={OrgChartJS.match.boundary}
                enableSearch={false}
                data={data}
              />
            </div>
          </td>
        </tr>
        <tr>
          <td className="mid" colSpan={2}>
            <button id="btn_export" onClick={png}>Export</button>
          </td>
        </tr>
        <tr>
          <td className="chart">
            <div id="chart_3">
              <OrgChartReact
                ref={chart3Ref}
                orientation={OrgChartJS.orientation.top}
                scaleInitial={OrgChartJS.match.boundary}
                enableSearch={false}
                data={data}
              />
            </div>
          </td>
          <td className="chart">
            <div id="chart_4">
              <OrgChartReact
                ref={chart4Ref}
                orientation={OrgChartJS.orientation.top_left}
                scaleInitial={OrgChartJS.match.boundary}
                enableSearch={false}
                data={data}
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartsExample />
  </React.StrictMode>
);