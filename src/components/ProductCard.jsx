import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export const ProductCard = (props) => {
    
    const deleteProduct = (id) =>{
        axios.delete(`http://localhost:8080/products/${id}`)
            .then((res)=>console.log(res.data))
            .catch((err)=>console.log(err))
            
        props.func(i=>i+1);    
        console.log(id);
        console.log('deleting a product');
    }

  return (
    <div style={{border:'1px solid gainsboro',  width:'20rem',padding:'1rem'}}>
        Brand: {props.item.brand}
        <br />
        title: {props.item.title}
        <br />
        Price: {props.item.price}
        <br />
        <Link to={`/product/${props.item.id}`}>
            <button>view</button>
        </Link>
        <button>edit</button>
        <button onClick={()=>deleteProduct(props.item.id)} >delete</button>
    </div>
  )
}
