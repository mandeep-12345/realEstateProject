import React,{useState} from 'react'
import "./login.css"
import { Link } from 'react-router-dom'
const Login =  () => {
  const [data,setData] = useState({
    username:'',
    password:''
  })
  const {username,password}= data;
  const changeHandler = e =>{
  setData({...data,[e.target.name]:[e.target.value]})
  }
  return (
    <div>
      <form id='Form'>
        <h1>Logo</h1>
        <p>Enter your credentials to access your account</p>
        <input type = "text" name ="username" placeholder="User ID" size="35" value={username} onChange={changeHandler}/><br/>
      

        <input type = "text" name ="password" placeholder="Password"  size="35"value={password} onChange={changeHandler}/><br/>
        <button type="button">Sign in</button><br/>
       
     
      </form>
      <Link to="/Login">
      <p class="last-para">Do you have an account yet? <a href="">Sign up</a></p>
      </Link>
    
    </div>
  );
}
export default Login;