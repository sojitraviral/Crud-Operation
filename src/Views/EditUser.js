import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate,useParams } from 'react-router-dom';

function EditUser() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const navigate = useNavigate();

    const [user, setUsers] = useState([]);

    const { id } = useParams();


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
            setName(res.data.name);
            setEmail(res.data.email);
            setPhone(res.data.phone );
        })
    }, [])


    const data = {
        name: name,
        email: email,
        phone: phone,
    }

    function Update(e) {
        e.preventDefault();
        console.log(data);
        axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, data).then(
            navigate("/users")
        )
    }

    return (
        <div className='w-screen h-full justify-centerflex items-center mt-16'>
            <h1 className='text-black text-3xl font-semibold font-Montserrat'> Edit  User</h1>

            <form className='w-4\/5 h-full flex flex-col justify-center items-center mt-4'>

                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter Your Name' className='w-full bg-white/10 mt-4 text-xl font-Montserrat font-normal outline-none py-4 pl-6 border border-zinc-400' />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter Your Email' className='w-full bg-white/10 mt-4 text-xl font-Montserrat font-normal outline-none py-4 pl-6 border border-zinc-400' />
                <input value={phone} onChange={(e) => setPhone(e.target.value)} type="phone" placeholder='Enter Your Phone' className='w-full bg-white/10 mt-4 text-xl font-Montserrat font-normal outline-none py-4 pl-6 border border-zinc-400' />

                <button onClick={Update} className='w-full bg-blue-600 mt-4 text-white text-xl font-semibold font-Montserrat py-4 pl-6'>Update User</button>
            </form>
        </div>
    );
}

export default EditUser;