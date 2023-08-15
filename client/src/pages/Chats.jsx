import React, { useEffect } from 'react';

const Chats = () => {
    useEffect(()=>{
        fetch('http://localhost:4000/api/v1/chat').then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    },[])
    return (
        <div>
            chats
        </div>
    );
};

export default Chats;