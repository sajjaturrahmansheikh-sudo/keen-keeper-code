"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MyLink = ({href,children,className}) => {

    const pathname = usePathname();

    return (
        <Link href={href} className={`${className}${pathname === href ? "py-2.5 px-4 rounded-sm bg-green-900 text-white": ""}`}>
            {children}
        </Link>
    );
};

export default MyLink;