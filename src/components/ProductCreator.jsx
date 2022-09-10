import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { Navbar } from './Navbar'

export const ProductCreator = () => {

    const [brand,setBrand] = useState('');
    const [title,setTitle] = useState('');
    const [image,setImage] = useState('');
    const [category,setCategory] = useState('');
    const [price,setPrice] = useState('');
    const token = useSelector((state)=>state.token)


    const addProduct = () =>{
        const payload = {
            brand,
            title,
            image,
            category,
            price,
        };
        const dataToPost = JSON.stringify(payload);
        
        fetch(`http://localhost:8080/products`,{
            method:"POST",
            body:dataToPost,
            headers: {
                "Content-Type":"application/json"
            }
        }).then(()=>{
            setBrand('');
            setTitle("");
            setImage('');
            setCategory('');
            setPrice('');    
        })
        
        console.log("product created");
    }

    if(token===''){
        return <Navigate to={'/login'} />
    }

  return (
    <div>
        <Navbar />
        <h1>Product Creator</h1>
        <label htmlFor="" >
            Brand: 
            <input type="text" value={brand} onChange={(e)=>setBrand(e.target.value)}/>
        </label>
        <br />
        <label htmlFor="">
            Title: 
            <input type="text"  value={title} onChange={(e)=>setTitle(e.target.value)}/>
        </label>
        <br />
        <label htmlFor="">
            Image: 
            <input type="text"  value={image} onChange={(e)=>setImage(e.target.value)}/>
        </label>
        <br />
        <label htmlFor="">
            Category: 
            <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)}/>
        </label>
        <br />
        <label htmlFor="">
            Price: 
            <input type="number" value={price} onChange={(e)=>setPrice(e.target.value)}/>
        </label>
        <br />
        <button onClick={addProduct}>Submit</button>
        <br /><br />
        <Link to={'/'}>
            <button>Go Back to Home page</button>
        </Link>
    </div>
  )
}
