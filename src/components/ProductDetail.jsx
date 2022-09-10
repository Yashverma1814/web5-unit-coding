import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

export const ProductDetail = () => {
    const [products,setProducts] = useState([]);
    const {id} = useParams();
    const fetchData =()=>{
        fetch(`http://localhost:8080/products/${id}`)
            .then((res)=>res.json())
            .then((res)=>setProducts(res))
            .catch((err)=>console.log(err))
            console.log(products)
    }
    
    useEffect(()=>{
        fetchData();
    },[])

  return (
    <div>
        <h1>Product Detail</h1>
                <div>
                    <img src={products.image} alt="" />
                    <p>Brand: {products.brand}</p>
                    <p>Title: {products.title}</p>
                    <p>Category: {products.category}</p>
                    <p>Price: {products.price}</p>
                </div>
    </div>
  )
}
