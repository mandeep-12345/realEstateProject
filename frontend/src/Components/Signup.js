import React,{useState} from 'react'
import axios from "axios";
import { Link } from 'react-router-dom'

const Signup = () =>{
    const [data,setData] = useState({
        email:"",
        password:"",
        confirmPassword:""
    });
    const handleChange = ({currentTarget:input}) =>{
        setData({...data,[input.name]:input.value})
    };
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const url = "http://localhost:7000/api/register";
            const {data:res} = await axios.post()
        
        }catch (error){

        }
    }
    return(
        <div className="Signup_container">
            <div className="Signup_form_container">
                <div className="Left"></div>
                <Link to="/Login">
                    <button type ="button" className="white_btn">
                        Sign in
                    </button>
                </Link>
                <div className="right"></div>
                <form className="Signin" onSubmit={handleSubmit}>
                <input type="text" placeholder="usermail" name="email" onChange={handleChange} value={data.email}></input><br/>
                <input type="text" placeholder="password" name="password" onChange={handleChange} value={data.password}></input><br/>
                <input type="text" placeholder="usermail" name="email" onChange={handleChange} value={data.confirmPassword}></input><br/>
                <button type="submit" className="Blue_btn">
                    Sign Up
                </button>
                </form>
            </div>
        </div>
    )
};
export default Signup;