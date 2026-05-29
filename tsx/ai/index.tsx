import React from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";

function ChartExample() {
  return (
    <OrgChartReact
      layout={OrgChartJS.layout.mixed}
      nodeBinding={{ field_0: "name", field_1: "title", img_0: "img" }}
      style={{ width: "100%", height: "100%" }}
      enableAI={true}
      data={[
        { id: 1, name: "Emily Carter", salary: '$5 900.00', title: "Chairman & CEO", email: "amber@domain.com", img: "https://cdn.balkan.app/shared/a/1.jpg", country: "India" },
        { id: 2, name: "Olivia Morgan", pid: 1, salary: '$5,900.00', title: "QA Lead", email: "ava@domain.com", img: "https://cdn.balkan.app/shared/a/2.jpg", startedAt: "10/10/2018", country: "USA" },
        { id: 3, name: "Sophia Bennett", pid: 1, salary: '$5,480.00', title: "Technical Director", img: "https://cdn.balkan.app/shared/a/3.jpg", country: "USA" },
        { id: 4, name: "Amelia Hayes", pid: 1, salary: '$4,480.00', title: "Sales Manager", email: "jay@domain.com", img: "https://cdn.balkan.app/shared/a/4.jpg", country: "USA" },
        { id: 5, name: "Isabella Clarke", pid: 2, salary: '$4,500.00', title: "QA", img: "https://cdn.balkan.app/shared/a/5.jpg", country: "Germany" },
        { id: 6, name: "Grace Turner", pid: 2, salary: '$4,300.00', title: "QA", img: "https://cdn.balkan.app/shared/a/6.jpg", country: "Philippines" },
        { id: 7, name: "Ava Mitchell", pid: 2, salary: '$4,200.00', title: "QA", img: "https://cdn.balkan.app/shared/a/7.jpg", country: "USA" },
        { id: 8, name: "James Harrison", pid: 3, salary: '$4,100.00', title: ".NET Team Lead", email: "kohen@domain.com", img: "https://cdn.balkan.app/shared/a/8.jpg", country: "Philippines" },
        { id: 9, name: "Lily Cooper", pid: 3, salary: '$3,000.00', title: "JS Team Lead", img: "https://cdn.balkan.app/shared/a/9.jpg", country: "Philippines" },
        { id: 10, name: "Mia Robinson", pid: 8, salary: '$3,700.00', title: "Programmer", img: "https://cdn.balkan.app/shared/a/17.jpg", country: "Philippines" },
        { id: 11, name: "Hannah Brooks",pid: 8, salary: '$3,700.00', title: "Programmer", img: "https://cdn.balkan.app/shared/a/11.jpg", country: "Germany" },
        { id: 12, name: "Charlotte Foster", pid: 9, salary: '$3,790.00', title: "Programmer", img: "https://cdn.balkan.app/shared/a/12.jpg", country: "China" },
        { id: 13, name: "Ruby Parker", pid: 9, salary: '$3,400.00', title: "Programmer", img: "https://cdn.balkan.app/shared/a/13.jpg", country: "China" },
        { id: 14, name: "Chloe Harris", pid: 4, salary: '$2,080.00', title: "Sales", img: "https://cdn.balkan.app/shared/a/14.jpg", country: "China" },
        { id: 15, name: "Lucy Scott", pid: 4, salary: '$2,070.00', title: "Sales", img: "https://cdn.balkan.app/shared/a/15.jpg", country: "India" },
        { id: 16, name: "Emma Kelly", pid: 4, salary: '$2,999.00', title: "Sales", img: "https://cdn.balkan.app/shared/a/16.jpg", country: "India" }
      ]}
    >
    </OrgChartReact>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);