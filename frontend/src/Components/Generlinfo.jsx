import React,{useState} from "react";
import {Link} from "react-router-dom";
import './General.css';
import Axios from 'axios'; 
function Generlinfo   ()  {
    const url ="localhost:5000/api/post"
    const [data,setData] = useState({
        mobile:"",
    })
    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            talks:data.talks
        })
        .then(res =>{
            console.log(res.data)
        })
    }
    function handle(e){
        const newData={...data}
        newData[e.target.id]= e.target.value
        setData(newData)
        console.log(newData)
    }
    return (
        <div className="s3-Container">
            <form className="General" onSubmit={(e) => submit(e)}>
                <div className="generalinfo">

                <div className="name">
            <label htmlFor="name">Name</label><br/>
            <select id="nme" name="Name" >
            <option value="owner">Owner</option>
            <option value="renter">Renter</option>
            </select><br/>
            </div>

            <div className="posted">
            <label htmlFor="Posted">Posted By</label><br/>
            <select id="post" name="Posts" placeholder="please select">
            <option value="owner">Owner</option>
            <option value="mediater">Mediater</option>
            </select><br/>
            </div>

            <div className="package">
            <label htmlFor="PT">Featured Package</label><br/>
            <select id="Pack" name="Packages" placeholder="please select">
            <option value="discount">Discount</option>
            <option value="regester">Regester</option>
            </select><br/>
            </div>
            </div>
            <div className="generalinfo2">

            <div className="mobile">
            <label htmlFor="calls">Mobile</label>
            <input onChange={(e) => handle(e)} id="mobile" name="conver" placeholder="Enter  mobile number" type="text" value={data.mobile} />
            </div><br/>

            <div className="sales">
            <label htmlFor="sales">Sale Type</label><br/>
            <select id="Sales" name="sold" placeholder="please select">
            <option value="cash">Accountable</option>
            <option value="regester">Regesteration</option>
            </select><br/>
            </div>

            <div className="PPD">
            <label htmlFor="ppd">PPD Package</label><br/>
            <select id="PPdetails" name="pd" placeholder="please select">
            <option value="local">Local</option>
            <option value="non">Non-Local</option>
            </select><br/>
            </div>
            <div className="btn1">
                <Link to="/BasicInfo">
                <button>Previous</button><br/>
                </Link>
            </div>
            <div className="btn2">
                <button  id="btn2">Save&Continue</button>
            </div>
                </div>

            </form>
        </div>
    )
}
export default Generlinfo;