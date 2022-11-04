
import axios from "axios"
import {SIGNUP_REQUEST,SIGNUP_SUCCESS,SIGNUP_FAILURE, GETSIGNUP_REQUEST, GETSIGNUP_SUCCESS, GETSIGNUP_FAILURE} from "./actionType"
let signUpFun=(payload)=>{
// dispatch({type:SIGNUP_REQUEST})
return axios.post("http://localhost:8080/signupdata",payload).then((res)=>{
    console.log(res.data)
//  return dispatch({type:SIGNUP_SUCCESS,payload:[res.data]})
}).catch((er)=>{
    // dispatch({type:SIGNUP_FAILURE,payload:er})
    console.log(er)
})
}
const getuserdata=(dispatch)=>{
  dispatch({type:GETSIGNUP_REQUEST})
  return axios.get("http://localhost:8080/signupdata").then((res)=>{
    console.log(res.data)
      dispatch({type:GETSIGNUP_SUCCESS,payload:res.data})
  }).catch((e)=>{
    dispatch({type:GETSIGNUP_FAILURE,payload:e})

  })



}


const deletUser=(id)=>{
    return axios.delete(`http://localhost:8080/signupdata/${id}`).then((res)=>{
        console.log(res.data)
         
      }).catch((e)=>{
       console.log(e)
    
      })  
}
export {signUpFun,getuserdata,deletUser}