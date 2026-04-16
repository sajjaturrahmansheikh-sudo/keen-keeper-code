import useFriend from '@/app/hook/useFriend';
import React from 'react';

const friendPromise = async function(){
    const res = await fetch("http://localhost:3000/data.json")
    const data = await res.json();
    return data;
}


const FriendsDetailPage = async({ params }) => {

    const friends = await friendPromise();

    const { id } = await params;
    console.log(id);
    const friend = friends.find(friend => friend.id == id);
    console.log(friend, "friend");


    return (
        <div>
            Friends Detail page :
        </div>
    );
};

export default FriendsDetailPage;