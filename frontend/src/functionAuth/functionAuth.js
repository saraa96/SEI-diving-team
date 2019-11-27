import axios  from "axios"

// register
export const register = (newuser)=>{
    return axios.post('http://localhost:5000/user/register' ,newuser )
    .then(res => console.log("registerd ! "))
    .catch(err => console.log(err))
}


// login 
export const login = (user)=>{
//user = email password


    return axios.post('http://localhost:5000/user/login' , user)
    .then(token =>{
            //console.log(token.data)
         localStorage.setItem('usertoken' , token.data.token)
         console.log("after set token to storage");
         
         return true
    })
    .catch(err=>console.log(err))
}

//logout 
export const logout = (user)=>{
    return axios.post('http://localhost:5000/user/logout' , user)
    .then(token =>{
            console.log(token)
        localStorage.removeItem('usertoken') // localStorage Token in the browser will be removed 
    })
    .catch(err=>console.log(err))


}

