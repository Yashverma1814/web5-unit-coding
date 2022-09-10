import React, { useContext } from 'react'
import { Navbar } from './Navbar';
// import { AuthContext } from '../context/AuthContext';
import {Link,Navigate} from 'react-router-dom'
import { logingIn } from '../Redux/action';
import {useDispatch,useSelector} from 'react-redux'

export const Login = () => {

    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    const dispatch = useDispatch();
    const token = useSelector((state)=>state.token)



    if(token){
        return <Navigate to={'/'} />
    }

  return (
    <div>
        <Navbar />
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email'/>
        <br />
        <input placeholder='Password' type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <br />
        {/* <Link to={'/'}> */}
            <button onClick={()=>dispatch(logingIn({email,password}))}>Login</button>
        {/* </Link> */}
    </div>
  )
}
// onClick={()=>handleLogin({email,password})}