"use client";

import { TimelineContext } from "@/context/timelineContext";
import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip, ResponsiveContainer } from "recharts";

const StatsPage = () => {
  const { timeline } = useContext(TimelineContext);

  let text = 0;
  let call = 0;
  let video = 0;

  timeline.forEach((element) => {
    if (element.text === "Text") {
      text += 1;
    }

    if (element.text === "Call") {
      call += 1;
    }

    if (element.text === "Video") {
      video += 1;
    }
  });

  const data = [
    { name: "Text", value: text, fill: "#8B5CF6" },
    { name: "Call", value: call, fill: "#1F2937" },
    { name: "Video", value: video, fill: "#10B981" },
  ];

  return (
    <div className="max-w-6xl w-[95%] sm:w-10/12 mx-auto py-12">
      
      <h1 className="text-3xl sm:text-5xl font-bold text-[#244D3F] mb-10">
        Friendship Analytics
      </h1>

      <div className="bg-white shadow-sm rounded-3xl border border-[#E5E7EB] p-5 sm:p-8">
        
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#244D3F]">
            By Interaction Type
          </h2>

        </div>

        <div className="flex justify-center items-center min-h-[350px]">
          {timeline.length === 0 ? (
            <div className="text-center">
              
              <div className="flex justify-center mb-5">
                <div className="w-20 h-20 rounded-2xl bg-[#244D3F]/10 flex items-center justify-center">
                  <span className="text-4xl">📊</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-[#1F2937]">
                No interaction logged yet
              </h3>

            </div>
          ) : (
            <div className="w-full max-w-[420px] h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    innerRadius={90}
                    outerRadius={130}
                    cornerRadius={10}
                    paddingAngle={5}
                    dataKey="value"
                    isAnimationActive={true}
                  />

                  <Legend
                    iconType="circle"
                    wrapperStyle={{
                      paddingTop: "25px",
                    }}
                  />

                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatsPage;