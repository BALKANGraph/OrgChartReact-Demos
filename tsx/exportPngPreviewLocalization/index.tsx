import React, { useRef } from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";

export const ChartExample = () => {

  const chartRef = useRef<OrgChartJS>(null);

  function pngPreview(){
    if (chartRef.current) {
      chartRef.current.pngPreviewUI.locCancel = '关闭';
      chartRef.current.pngPreviewUI.locAddNew = '添加新页面';
      chartRef.current.pngPreviewUI.locExport = '导出';
      chartRef.current.pngPreviewUI.locRemove = '删除页面';
      chartRef.current.pngPreviewUI.locClickToAdd = '点击一个节点以在此处显示';
      chartRef.current.pngPreviewUI.locAddNew = '添加新的 PNG';
      chartRef.current.pngPreviewUI.locRemove = '移除 PNG';
      chartRef.current.pngPreviewUI.locParentLevels = 'parent levels';
      chartRef.current.pngPreviewUI.locChildLevels = 'child levels';
      chartRef.current
      chartRef.current.pngPreviewUI.show({
        footer: `<text text-anchor="end" style="font-size: 24px;">
                  第 {current-page} 页，共 {total-pages} 页
                </text>`
      });``
    }
  }

  const handleInit = () => {
    pngPreview();
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
                  onClick: pngPreview
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