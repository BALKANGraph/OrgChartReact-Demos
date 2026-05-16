import React, { useRef } from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, Employee, OrgChartJS } from "balkan-orgchart-react";

export const ChartExample = () => {
  const chartRef = useRef<OrgChartJS>(null);

  function pdf() {
    chartRef.current?.exportToPDF({
        expandChildren: false,
        pages: [
            {
                nodeId: 2
            },
            {
                nodeId: 3,
                childLevels: 1
            },
            {
                nodeId: 4
            },
        ]
    });
}

  return  <OrgChartReact ref={chartRef}
            nodeBinding={{ field_0: 'name', field_1: 'title' }}
            menu={{
                export_pdf: {
                  text: "PDF Export by teams",
                  icon: OrgChartJS.icon.pdf(24, 24, "#7A7A7A"),
                  onClick: pdf
                },
            }}
            enableSearch={false}
          >
            <Employee
              name="Jack Hill"
              title="Chairman & CEO"
            >
              <Employee
                name="Lexie Cole"
                title="QA Lead"
              >
                <Employee
                  name="Elliot Ross"
                  title="QA"
                />

                <Employee
                  name="Anahi Gordon"
                  title="QA"
                />
              </Employee>

              <Employee
                name="Janae Barrett"
                title="Technical Director"
              >
                <Employee
                  name="Nash Ingram"
                  title=".NET Team Lead"
                >
                  <Employee
                    name="Alice Gray"
                    title="Programmer"
                  />
                </Employee>

                <Employee
                  name="Sage Barnett"
                  title="JS Team Lead"
                >
                  <Employee
                    name="Reuben Mcleod"
                    title="Programmer"
                  />

                  <Employee
                    name="Ariel Wiley"
                    title="Programmer"
                  />
                </Employee>
              </Employee>

              <Employee
                name="Aaliyah Webb"
                title="Manager"
              >
                <Employee
                  name="Lucas West"
                  title="Marketer"
                />

                <Employee
                  name="Adan Travis"
                  title="Designer"
                />

                <Employee
                  name="Alex Snider"
                  title="Sales Manager"
                />
              </Employee>
            </Employee>
          </OrgChartReact>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);