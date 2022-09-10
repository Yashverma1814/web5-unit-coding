import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Navbar } from './Navbar';
import { ProductCard } from './ProductCard';
import { Navigate } from 'react-router-dom';


export const ProductPage = () => {
    const [products,setProducts] = useState([]);
    const [itemDeleted, setItemDeleted] = useState(1);
    const token = useSelector((state)=>state.token)



    const fetchData =()=>{
        fetch(`http://localhost:8080/products`)
            .then((res)=>res.json())
            .then((res)=>setProducts(res))
            .catch((err)=>console.log(err))
            console.log(products)
    }
    
    useEffect(()=>{
        fetchData();
    },[itemDeleted])

    if(token===''){
        return <Navigate to={'/login'} />
    }

  return (
    <div>
        <Navbar />
        <h1>Products</h1>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gridGap:'1rem'}}>
            {
                products.map((el)=>{
                    return(
                    <div key={el.id}>
                        <ProductCard item={el} func={setItemDeleted}/>    
                    </div>)
                })
            }
        </div>
    </div>
  )
}
