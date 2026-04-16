import useFriend from '@/app/hook/useFriend';
import Image from 'next/image';
import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { GrVideo } from 'react-icons/gr';
import { IoMdText } from 'react-icons/io';
import { IoArchiveOutline } from 'react-icons/io5';
import { PiBellSimpleZThin } from 'react-icons/pi';
import { RiDeleteBin6Line } from 'react-icons/ri';

const friendPromise = async function () {
    const res = await fetch("http://localhost:3000/data.json")
    const data = await res.json();
    return data;
}


const FriendsDetailPage = async ({ params }) => {

    const friends = await friendPromise();

    const { id } = await params;
    const friend = friends.find(friend => friend.id == id);


    return (
        <div className='bg-[#F8FAFC]'>
            <div className='w-7/12 mx-auto py-20'>
                <div className='grid lg:grid-cols-3 gap-4 items-start'>
                    <div className='col-span-1'>
                        <div className='bg-white p-10 rounded-sm shadow-sm text-center space-y-2'>
                            <Image className='mx-auto' src={friend.picture} alt={friend.name} width={80} height={80}></Image>
                            <h3 className='text-[#1F2937] font-semibold'>{friend.name}</h3>
                            <div className='mt-4'>

                                <span className={`font-medium text-[12px] capitalize px-3 py-2 rounded-full ${friend.status === "overdue" ? "bg-red-600 text-white" : friend.status === "almost due" ? "bg-[#EFAD44] text-white" : "bg-[#244D3F] text-white"}`}> {friend.status} </span>

                            </div>
                            <div className='flex items-center justify-center gap-2 mt-2'>
                                {
                                    friend.tags.map((tag, ind) => (
                                        <span key={ind} className='bg-[#CBFADB] text-[#244D3F] text-[12px] px-3 rounded-full'> {tag.toUpperCase()} </span>
                                    ))
                                }
                            </div>
                            <p className='text-[#64748B] font-medium'>{friend.bio}</p>

                        </div>
                        <div className='space-y-3 mt-4'>
                            <div className='bg-white flex gap-1 justify-center items-center py-3 rounded-sm shadow-sm text-[#1F2937] font-medium'><PiBellSimpleZThin className='text-[#1F2937] font-medium' />Snooze 2 weekss</div>
                            <div className='bg-white flex gap-1 justify-center items-center py-3 rounded-sm shadow-sm text-[#1F2937] font-medium'><IoArchiveOutline className='text-[#1F2937] font-medium' />Archive</div>
                            <div className='bg-white flex gap-1 justify-center items-center py-3 rounded-sm shadow-sm text-red-700 font-medium'><RiDeleteBin6Line className='text-red-700 font-medium' />Delete</div>
                        </div>

                    </div>
                    <div className='col-span-2'>
                        <div className='grid md:grid-cols-3 gap-2'>
                            <div className='bg-white rounded-sm shadow p-4'>
                                <h4 className='text-[#244D3F] text-3xl font-semibold'>{friend.days_since_contact}</h4>
                                <h2 className='text-[#64748B] text-[18px]'>Days Since Contact</h2>
                            </div>
                            <div className='bg-white rounded-sm shadow p-4'>
                                <h4 className='text-[#244D3F] text-3xl font-semibold'>{friend.goal}</h4>
                                <h2 className='text-[#64748B] text-[18px]'>Goal (Days)</h2>
                            </div>
                            <div className='bg-white rounded-sm shadow p-4'>
                                <h4 className='text-[#244D3F] text-3xl font-semibold'>{friend.next_due_date}</h4>
                                <h2 className='text-[#64748B] text-[18px]'>Next Due</h2>
                            </div>
                        </div>
                        <div className='bg-white py-5 px-3 rounded-sm shadow-sm mt-3'>
                            <div className='md:flex justify-between items-center'>
                                <div className='space-y-2'>
                                    <h3 className='text-[#244D3F] text-[20px] font-medium'>Relationship Goal</h3>
                                    <p className='text-[#64748B]'>Connect every <span className='text-[#64748B] font-bold'>30 days</span></p>
                                </div>
                                <div>
                                    <button className='btn'>Edit</button>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white py-5 px-3 rounded-sm shadow-sm mt-3'>
                            <h2 className='text-[#244D3F] text-[20px] font-medium'>Quick Check-In</h2>
                            <div className='md:flex items-center justify-center gap-3 mt-3 space-y-3'>
                                <div className='text-[#F8FAFC] cursor-pointer py-3 px-16 rounded-sm shadow-sm space-y text-center'>
                                    <button className='text-[#1F2937] cursor-pointer text-xl'><FiPhoneCall /> Call</button>
                                </div>
                                <div className='text-[#F8FAFC] cursor-pointer py-3 px-16 rounded-sm shadow-sm space-y text-center'>
                                    <button className='text-[#1F2937] cursor-pointer text-xl'><IoMdText /> Text</button>
                                </div>
                                <div className='text-[#F8FAFC] cursor-pointer py-3 px-16 rounded-sm shadow-sm space-y text-center'>
                                    <button className='text-[#1F2937] cursor-pointer text-xl'><GrVideo /> Call</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FriendsDetailPage;