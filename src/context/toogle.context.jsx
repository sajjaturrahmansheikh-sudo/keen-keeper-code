'use client'
import React, { createContext, useState } from 'react';

export const FriendContext = createContext();
const FriendsProvider = ({ children }) => {
    const [Friends , setFriends] = useState([]);
    const data = {
        Friends , 
        setFriends
    }
    return (
        <FriendContext.Provider value={data}>
            {children}
        </FriendContext.Provider>
     );
};

export default FriendsProvider;