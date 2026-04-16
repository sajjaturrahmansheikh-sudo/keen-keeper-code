"use client"
import React, { useEffect, useState } from 'react';

const useFriend = () => {
    const [friends, setfriends] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/data.json")
            const data = await res.json();

            setTimeout(() => {
                setfriends(data);
                setLoading(false);
            }, 2000);
        };
        fetchData();
    }, []);
    return {friends , loading}
};

export default useFriend;