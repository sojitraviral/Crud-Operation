import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../Component/Loader';
import { Link } from 'react-router-dom';

function Product() {
    // const url = "https://shoppingapiacme.herokuapp.com/shopping";
    const url = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        axios.get(url)
            .then(response => {
                setLoading(false)
                setProducts(response.data);
            })
            .catch(() => {
                setLoading(true);
            });
    }, [url])


    return (

        <div className='item-container'>

            {loading ? <Loader /> :
                products.map((product) => (
                    < div className='card' key={product.id} >
                        <h1 className='text-2xl font-bold mb-3'>
                            {product.title}
                        </h1>
                        <div className='flex justify-center'>
                            <img src={product.image} alt={product.image} />
                        </div>
                        {/* <div>{product.description}</div> */}
                        <div className='font-bold text-xl mb-3'>
                           $ {product.price}
                        </div>
                        <div className='font-bold text-xl mb-3'>
                            {product.category}
                        </div>
                        <div>{product.description}</div>
                        <Link to={`/about`} className="bg-blue-500 text-white p-2 flex justify-center"> View</Link>
                    </div>
                ))
            }
        </div >
    );
}

export default Product;