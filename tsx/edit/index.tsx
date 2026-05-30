import React, { useRef } from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";

export const ChartExample = () => {

  const chartRef = useRef<OrgChartJS>(null);

  chartRef.current?.editUI.on('element-btn-click', function (sender, args) {
    OrgChartJS.fileUploadDialog(function (file) {
        var formData = new FormData();
        formData.append('file', file);
        alert('upload the file');
    })
});

  return  <OrgChartReact 
            ref={chartRef}
            layout={OrgChartJS.layout.mixed}
            editForm={{
              titleBinding: "EmployeeName",
              photoBinding: "ImgUrl",
              addMoreBtn: 'Add element',
              addMore: 'Add more elements',
              addMoreFieldName: 'Element name',
              buttons: {
                edit: {
                    text: 'Edit',
                    hideIfEditMode: true,
                    hideIfDetailsMode: false
                },
                share: {
                    text: 'Share'
                },
                pdf: {
                    text: 'Save as PDF'
                },
                remove: {
                    text: 'Remove',
                    hideIfDetailsMode: true
                }
              },
              generateElementsFromFields: true,
              elements: [
                  { type: 'textbox', label: 'Full Name', binding: 'EmployeeName' },
                  { type: 'textbox', label: 'Job Title', binding: 'Title' },

                  { type: 'textbox', label: 'Email Address', binding: 'Email', vlidators: { required: 'Is required', email: 'Invalid email' } },
                  [
                      { type: 'textbox', label: 'Phone', binding: 'Mobile' },
                      { type: 'date', label: 'Start Date', binding: 'Start' }
                  ],
                  [
                      { type: 'select', options: [{ value: 'bg', text: 'Bulgaria' }, { value: 'ru', text: 'Russia' }, { value: 'gr', text: 'Greece' }], label: 'Country', binding: 'Country' },
                      { type: 'textbox', label: 'City', binding: 'Vity' },
                  ],
                  { type: 'textbox', label: 'Photo Url', binding: 'ImgUrl', btn: 'Upload' },
              ]
            }}
            data={[
              { id: "1", EmployeeName: "Jack Hill", Title: "Chairman and CEO", Email: "amber@domain.com", ImgUrl: "https://cdn.balkan.app/shared/16.jpg", tags: ['orange'] },
              { id: "2", pid: "1", EmployeeName: "Lexie Cole", Title: "QA Lead", Email: "ava@domain.com", ImgUrl: "https://cdn.balkan.app/shared/2.jpg" },
              { id: "3", pid: "1", EmployeeName: "Janae Barrett", Title: "Technical Director", ImgUrl: "https://cdn.balkan.app/shared/3.jpg" },
              { id: "4", pid: "1", EmployeeName: "Aaliyah Webb", Title: "Manager", Email: "jay@domain.com", ImgUrl: "https://cdn.balkan.app/shared/4.jpg", tags: ['orange'] },
              { id: "5", pid: "2", EmployeeName: "Elliot Ross", Title: "QA", ImgUrl: "https://cdn.balkan.app/shared/5.jpg" },
              { id: "6", pid: "2", EmployeeName: "Anahi Gordon", Title: "QA", ImgUrl: "https://cdn.balkan.app/shared/6.jpg" },
              { id: "7", pid: "2", EmployeeName: "Knox Macias", Title: "QA", ImgUrl: "https://cdn.balkan.app/shared/7.jpg" },
              { id: "8", pid: "3", EmployeeName: "Nash Ingram", Title: ".NET Team Lead", Email: "kohen@domain.com", ImgUrl: "https://cdn.balkan.app/shared/8.jpg", tags: ['orange'] },
              { id: "9", pid: "3", EmployeeName: "Sage Barnett", Title: "JS Team Lead", ImgUrl: "https://cdn.balkan.app/shared/9.jpg", tags: ['orange'] },
              { id: "10", pid: "8", EmployeeName: "Alice Gray", Title: "Programmer", ImgUrl: "https://cdn.balkan.app/shared/10.jpg" },
              { id: "11", pid: "8", EmployeeName: "Anne Ewing", Title: "Programmer", ImgUrl: "https://cdn.balkan.app/shared/11.jpg" },
              { id: "12", pid: "9", EmployeeName: "Reuben Mcleod", Title: "Programmer", ImgUrl: "https://cdn.balkan.app/shared/12.jpg" },
              { id: "13", pid: "9", EmployeeName: "Ariel Wiley", Title: "Programmer", ImgUrl: "https://cdn.balkan.app/shared/13.jpg" },
              { id: "14", pid: "4", EmployeeName: "Lucas West", Title: "Marketer", ImgUrl: "https://cdn.balkan.app/shared/14.jpg" },
              { id: "15", pid: "4", EmployeeName: "Adan Travis", Title: "Designer", ImgUrl: "https://cdn.balkan.app/shared/15.jpg" },
              { id: "16", pid: "4", EmployeeName: "Alex Snider", Title: "Sales Manager", ImgUrl: "https://cdn.balkan.app/shared/16.jpg" }
            ]}  
            nodeBinding={{
              field_0: "EmployeeName",
              field_1: "Title",
              img_0: "ImgUrl"
            }}>
          </OrgChartReact>
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChartExample />
  </React.StrictMode>
);