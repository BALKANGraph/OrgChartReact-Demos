import React, { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { OrgChartReact, OrgChartJS } from "balkan-orgchart-react";

function ChartExample() {
  const chartRef = useRef<OrgChartJS>(null);

  function sendEmail(args: { to: string; subject: string; body: string }){
    window.location.href = `mailto:${args.to}&subject=${encodeURI(args.subject)}&body=${encodeURI(args.body)}`;
    return 'ok';
  }

    useEffect(() => {
      chartRef.current?.onAIToolCalls(function(args){    
          for(var toolCall of args.toolCalls){
              if (toolCall.FunctionName == 'sendEmail'){
                  toolCall.FunctionResult = sendEmail(toolCall.FunctionArguments as { to: string; subject: string; body: string });
              }   
          }    
      });
    }, []);

  return (
    <OrgChartReact
      ref={chartRef}
      template={"mery"}
      nodeBinding={{ field_0: "name", field_1: "email", img_0: "img" }}
      style={{ width: "100%", height: "100%" }}
      enableAI={true}
      aiChatTools={[{
            functionName: 'sendEmail',        
            functionDescription: 'Send an email to a given employee with a subject and message.',        
            functionParameters: {
                type: "object",
                properties: {
                    to: {
                        type: "string",
                        description: "The employee email address."
                    },
                    subject: {
                        type: "string",
                        description: "Email subject line."
                    },
                    body: {
                        type: "string",
                        description: "Body of the email message."
                    }
                },
                required: [
                    "to",
                    "subject",
                    "body"
                ]
            }
      }]}
      onInit={() => {
        chartRef.current?.aiUI.show(true)
      }}
      data={[
        { id: 1, name: "Denny Curtis", title: "Chairman & CEO", email: 'denny.curtis@balkan.app', img: "https://cdn.balkan.app/shared/a/1.jpg" },
        { id: 2, pid: 1, name: "Ashley Barnett", title: "QA Lead", email: 'ashley.barnett@balkan.app', img: "https://cdn.balkan.app/shared/a/2.jpg" },
        { id: 3, pid: 1, name: "Caden Ellison", title: "Technical Director", email: 'caden.ellison@balkan.app', img: "https://cdn.balkan.app/shared/a/3.jpg" }
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