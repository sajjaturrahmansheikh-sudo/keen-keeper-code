'use client'

import { useContext } from "react";
import { FriendContext } from "@/context/toogle.context";
import { PieChart, Pie, Cell } from "recharts";

const getStats = (friends) => {
    const stats = { call: 0, text: 0, video: 0 };

    friends.forEach(friend => {
        if (friend.type === "call") stats.call++;
        else if (friend.type === "text") stats.text++;
        else if (friend.type === "video") stats.video++;
    });

    const total = stats.call + stats.text + stats.video;

    return {
        ...stats,
        total,
        textPercent: total ? ((stats.text / total) * 100).toFixed(1) : 0,
        callPercent: total ? ((stats.call / total) * 100).toFixed(1) : 0,
        videoPercent: total ? ((stats.video / total) * 100).toFixed(1) : 0,
    };
};

const COLORS = ["#7C3AED", "#374151", "#22C55E"];

const StatePage = () => {

    const { Friends } = useContext(FriendContext);
    const stats = getStats(Friends);

    const data = [
        { name: "Text", value: stats.text },
        { name: "Call", value: stats.call },
        { name: "Video", value: stats.video }
    ];

    return (
        <div className="bg-[#F8FAFC] min-h-screen py-20">

            <div className="w-7/12 mx-auto">

                <h2 className="text-5xl font-bold text-[#1F2937] mb-10">
                    Friendship Analytics
                </h2>

                {
                    Friends.length === 0 ? (
                        <div className="text-center mt-20">
                            <p className="text-gray-400 text-lg">No data available</p>
                        </div>
                    ) : (

                        <div className="bg-white p-10 rounded-xl shadow">

                            <h4 className="mb-6 text-[#244D3F] text-[20px] font-medium">
                                By Interaction Type
                            </h4>

                            {/* Chart */}
                            <div className="flex justify-center relative">

                                <PieChart width={250} height={250}>
                                    <Pie
                                        data={data}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={70}
                                        outerRadius={100}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {data.map((entry, index) => (
                                            <Cell key={index} fill={COLORS[index]} />
                                        ))}
                                    </Pie>
                                </PieChart>

                            </div>

                            {/* Legend */}
                            <div className="flex justify-center gap-10 mt-8 text-sm">

                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-[#7C3AED]"></span>
                                    <p className="text-[#64748B]">Text</p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-[#374151]"></span>
                                    <p className="text-[#64748B]">Call</p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-[#22C55E]"></span>
                                    <p className="text-[#64748B]">Video</p>
                                </div>

                            </div>

                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default StatePage;