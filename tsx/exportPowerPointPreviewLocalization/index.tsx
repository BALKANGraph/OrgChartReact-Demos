import React, { useRef } from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";

export const ChartExample = () => {

  const chartRef = useRef<OrgChartJS>(null);

  function powerPointPreview(){
    if (chartRef.current) {
      chartRef.current.powerPointPreviewUI.locCancel = '关闭';
      chartRef.current.powerPointPreviewUI.locAddNew = '移除幻灯片';
      chartRef.current.powerPointPreviewUI.locExport = '导出';
      chartRef.current.powerPointPreviewUI.locRemove = '移除幻灯片';
      chartRef.current.powerPointPreviewUI.locClickToAdd = '点击一个节点以在此处显示';
      chartRef.current
      chartRef.current.powerPointPreviewUI.show({
        footer: `<text text-anchor="end" style="font-size: 24px;">
                  第 {current-page} 页，共 {total-pages} 页
                </text>`
      });
    }
  }

  const handleInit = () => {
    powerPointPreview();
  }

  return  <OrgChartReact 
            ref={chartRef}  
            nodeBinding={{ field_0: 'name', field_1: 'title' }}
            enableSearch={false}
            onInit={handleInit}
            menu={{
              previewPDF: {
                  text: "导出 PNG", 
                  icon: OrgChartJS.icon.png(24, 24, "#7A7A7A"), 
                  onClick: powerPointPreview
              }
            }}
            data={[
              { id: 1, name: "张伟", title: "首席执行官" },
              { id: 2, pid: 1, name: "王昊", title: "开发团队负责人" },
              { id: 3, pid: 1, name: "李静", title: "人力资源" },
              { id: 4, pid: 3, name: "刘欣", title: "人力资源" }
            ]}
          >
           
          </OrgChartReact>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);