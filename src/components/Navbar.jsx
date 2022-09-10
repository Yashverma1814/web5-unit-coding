import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div style={{padding:'0.5rem',border:'1px solid gainsboro'}}>
        <div style={{display:'grid',gridTemplateColumns:"repeat(3,1fr)"}}>
            <Link to={'/'}>
                <h5>Home</h5>
            </Link>
            <Link to={'/login'}>
                <h5>Login</h5>
            </Link>
            <Link to={'/product/creator'}>
                <h5>Product Creator</h5>
            </Link>
        </div>
    </div>
  )
}
