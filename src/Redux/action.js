import { LOGIN } from "./actionTypes"

export const login = (data) => {
    return {
        type: LOGIN,
        payload: data
    }
}

export const logingIn = (data) => (dispatch) => {
    const dataToPost = JSON.stringify(data);
    fetch(`https://reqres.in/api/login`,{
        method:'POST',
        body:dataToPost,
        headers:{
            "Content-Type":"application/json"
        }
    }).then((res)=>res.json())
    .then((res)=>dispatch(login(res.token)));

}