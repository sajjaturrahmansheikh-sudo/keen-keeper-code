'use client'
import FriendsProvider from '@/context/toogle.context';
import React from 'react';

const Providers = ({children}) => {
    return (
        <FriendsProvider>
            {children}
        </FriendsProvider>
    );
};

export default Providers;