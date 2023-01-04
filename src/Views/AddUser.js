import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddUser() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const navigate = useNavigate();

    const data = {
        name: name,
        email: email,
        phone: phone,
    }

    function Submit(e) {
        e.preventDefault();
        console.log(data);
        axios.post("https://jsonplaceholder.typicode.com/users", data).then(
            navigate("/users")
        )
    }

    return (
        <div className='w-screen h-full justify-centerflex items-center mt-16'>
            <h1 className='text-black text-3xl font-semibold font-Montserrat'> Add User</h1>

            <form className='w-4\/5 h-full flex flex-col justify-center items-center mt-4'>

                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter Your Name' className='w-full bg-white/10 mt-4 text-xl font-Montserrat font-normal outline-none py-4 pl-6 border border-zinc-400' />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter Your Email' className='w-full bg-white/10 mt-4 text-xl font-Montserrat font-normal outline-none py-4 pl-6 border border-zinc-400' />
                <input value={phone} onChange={(e) => setPhone(e.target.value)} type="phone" placeholder='Enter Your Phone' className='w-full bg-white/10 mt-4 text-xl font-Montserrat font-normal outline-none py-4 pl-6 border border-zinc-400' />

                <button onClick={Submit} className='w-full bg-blue-600 mt-4 text-white text-xl font-semibold font-Montserrat py-4 pl-6'>Add User</button>
            </form>
        </div>
    );
}

export default AddUser;