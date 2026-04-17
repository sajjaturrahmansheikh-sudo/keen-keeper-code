'use client'
import { FriendContext } from '@/context/toogle.context';
import React, { useContext } from 'react';
import { FaPhoneVolume } from 'react-icons/fa';
import { IoVideocamSharp } from 'react-icons/io5';
import { MdTextsms } from 'react-icons/md';
import { toast } from 'react-toastify';

const HandleButtonToogle = ({ friend }) => {

    const { Friends, setFriends } = useContext(FriendContext)
    console.log(Friends, "something");

    const handleButton = (type) => {
        setFriends(prev => [
            ...prev,
            {
                ...friend,
                type,              // 🔥 important
                time: new Date()   // optional (date show করার জন্য)
            }
        ]);

        toast.success(`${friend.name} ${type} started`);
    };
    return (
        <div className='flex gap-3'>
            <button onClick={() => handleButton("call")} className='btn flex-col !py-5 !px-16 gap-1 items-center h-auto'><FaPhoneVolume size={20} />Call</button>
            <button onClick={() => handleButton("text")} className='btn flex-col !py-5 !px-16 gap-1 items-center h-auto'><MdTextsms size={20} />Text</button>
            <button onClick={() => handleButton("video")} className='btn flex-col !py-5 !px-16 gap-1 items-center h-auto'><IoVideocamSharp size={20} />Video</button>
        </div>

    );
};

export default HandleButtonToogle;