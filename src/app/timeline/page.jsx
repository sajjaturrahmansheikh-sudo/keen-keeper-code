'use client'

import { FriendContext } from "@/context/toogle.context";
import Image from "next/image";
import { useContext } from "react";
import { FaPhone, FaVideo } from "react-icons/fa";
import { MdTextsms } from "react-icons/md";

const TimeLine = () => {

    const { Friends } = useContext(FriendContext);

    return (
        <div className="bg-[#F8FAFC] min-h-screen">

            <div className="w-7/12 mx-auto py-20">
                <h2 className="text-5xl text-[#1F2937] font-bold mb-8">Timeline</h2>

                {
                    Friends.length === 0 ? (
                        <div className="text-center mt-20">
                            <p className="text-gray-400 text-lg">No data available</p>
                        </div>
                    ) :
                        Friends.map((friend, ind) => {

                            let icon;
                            let label;

                            if (friend.type === "call") {
                                icon = <FaPhone />;
                                label = "Call";
                            }
                            else if (friend.type === "text") {
                                icon = <MdTextsms />;
                                label = "Text";
                            }
                            else if (friend.type === "video") {
                                icon = <FaVideo />;
                                label = "Video";
                            }

                            return (
                                <div key={ind} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm mb-4">

                                    {/* icon */}
                                    <div className="text-xl text-gray-600">
                                        {icon}
                                    </div>

                                    {/* text */}
                                    <div className="flex-1">
                                        <p className="text-gray-800">
                                            <span className="font-semibold">{label}</span> with {friend.name}
                                        </p>

                                        <p className="text-sm text-gray-400">
                                            {friend.time ? new Date(friend.time).toDateString() : ""}
                                        </p>
                                    </div>

                                    {/* image */}
                                    <Image
                                        src={friend.picture}
                                        alt={friend.name}
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                    />

                                </div>
                            );
                        })
                }

            </div>
        </div>
    );
};

export default TimeLine;