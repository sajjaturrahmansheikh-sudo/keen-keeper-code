"use client"
import useFriend from '@/app/hook/useFriend';
import React from 'react';
import FriendCard from '../ui/FriendCard';

const Friends = () => {

    const { friends, loading } = useFriend();
    const onTrack = friends.filter(friend => friend.status === "on track").length
    return (
        <div>

            <div className="py-10 border-b border-[#E9E9E9]">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="bg-white text-center p-8 rounded-sm">
                        <h2 className="text-[#244D3F] text-3xl font-semibold"> {friends.length} </h2>
                        <h4 className="text-[#64748B]">Total Friends</h4>
                    </div>
                    <div className="bg-white text-center p-8 rounded-sm">
                        <h2 className="text-[#244D3F] text-3xl font-semibold"> {onTrack} </h2>
                        <h4 className="text-[#64748B]">On Track</h4>
                    </div>
                    <div className="bg-white text-center p-8 rounded-sm">
                        <h2 className="text-[#244D3F] text-3xl font-semibold">6</h2>
                        <h4 className="text-[#64748B]">Need Attention</h4>
                    </div>
                    <div className="bg-white text-center p-8 rounded-sm">
                        <h2 className="text-[#244D3F] text-3xl font-semibold">12</h2>
                        <h4 className="text-[#64748B]">Interactions This Month</h4>
                    </div>
                </div>
            </div>
            <div className="py-10 space-y-3">
                <h2 className="text-[#1F2937] font-semibold text-2xl">Your Friends</h2>
            </div>
            {loading ?
                <div className='flex justify-center items-center'><span className="loading loading-spinner text-[#016630]"></span></div> :
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                    {
                        friends.map(friend => <FriendCard key={friend.id} friend={friend}></FriendCard>)
                    }
                </div>
            }

        </div>
    );
};

export default Friends;