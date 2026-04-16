import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FriendCard = ({friend}) => {
    return (
        <Link href={`/friends/${friend.id}`}>
            <div className='bg-white p-5 text-center space-y-2 rounded-sm shadow-sm'>
                <Image className='mx-auto' src={friend.picture} alt={friend.name} width={80} height={80}></Image>
                <h3 className='text-[#1F2937] font-semibold'>{friend.name}</h3>
                <p className='text-[#64748B]'>{friend.days_since_contact}d ago</p>

                <div className='flex items-center justify-center gap-2 mt-2'>
                    {
                        friend.tags.map((tag, ind) => (
                            <span key={ind} className='bg-[#CBFADB] text-[#244D3F] text-[12px] px-3 rounded-full'> {tag.toUpperCase()} </span>
                        ))
                    }
                </div>
                <div className='mt-4'>

                    <span className={`font-medium text-[12px] capitalize px-3 py-2 rounded-full ${friend.status === "overdue" ? "bg-red-600 text-white" : friend.status === "almost due" ? "bg-[#EFAD44] text-white" : "bg-[#244D3F] text-white"}`}> {friend.status} </span>

                </div>
            </div>


        </Link>
    );
};

export default FriendCard;