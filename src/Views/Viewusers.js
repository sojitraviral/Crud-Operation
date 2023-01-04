import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function Viewusers() {

    const [user, setUsers] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
            setUsers(res.data);
        })
    }, [])


    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <Link to="/users" className='text-black font-semibold px-6 font-Inter text-2xl mt-8'>Back to Home</Link>

            {user && (
                <div className='w-4\/5 flex px-6 py-4 border border-black mt-16'>
                    <div className='w-4\/5 flex flex-col space-y-4'>
                        <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>Name</h2>
                        <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>Email</h2>
                        <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>Phone</h2>
                    </div>

                    <div className='w-4\/5 flex flex-col space-y-4'>
                        <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>{user.name}</h2>
                        <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>{user.email}</h2>
                        <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>{user.phone}</h2>
                    </div>

                </div>
                
            )}

        </div>
    );
}

export default Viewusers;