import React,{useState} from "react";
import './Basic.css';
import {Link, } from "react-router-dom";
import Axios from "axios";


const  BasicInfo =  () =>  {
    const url  = "localhost:5000/api/post"
    const [data,setData] =useState({
        Property:'',
        price:''
    });
    const submit =(e) => {
        e.preventDefault();
        Axios.post(url,{
            Property:data.Property,
            price:data.Price
        })
        .then(res =>{
            console.log(res.data)
        })
    }
    const  handle = async (e) => {
            const newData={...data}
            newData[e.target.id]= e.target.value
            setData(newData)
            console.log(newData)
            
        
    }
    return (
        <div className="container">
        
            <form className="Basic" onSubmit={(e) => submit(e)}>
            <div className="Basicinfo1">
                <div className="PT">
            <label htmlFor="PT">Property Type</label><br/>
            <select id="Property" name="Property"
            onChange={(e) => handle(e)} value={data.Property}required >
            <option value=""   disabled >Select property type</option>
            <option value="own">Land</option>
            <option value="flat">Flat</option>
            <option value="house">House</option>
            </select><br/>
            </div>

            <div className="Price">
            <label  htmlFor="price">Price</label><br/>
            <input  id="price" name="price" placeholder="Example:10000" type="text"
           onChange={(e) => handle(e)} value = {data.price} 
            required />
            </div><br/>

            <div className="Age">

            <label  htmlFor="PA">Property Age</label><br/>
            <select id="propertyage" name="PropertysAge" >
            <option value="" disabled selected hidden>
                    Select Property Age
                  </option>
            <option value="5years">5Years</option>
            <option value="15years">15Years</option>
            <option value="20years">20Years</option>
            </select><br/>
            </div>
            
            <div className="Pd">
            <label  htmlFor="PD">Property Description</label><br/>
            <input type="text" id="ProDes" name="ProDes" size="35"/>
            </div><br/>
            </div>
            <div className="basicinfo2">
            
            <div className="Negotable">
            <label  htmlFor="Negotable">Negotable</label><br/>
            <select id="SelectNegotable" name="Talks">
            <option value="phone call">Phone Call</option>
            <option value="mediater">Mediater</option>
            </select><br/>
            </div>
            
            <div className="OwnerShip">
            <label  htmlFor="OS">Ownership</label><br/>
            <select id="SelectOW" name="ownership">
            <option value="rent">Rent</option>
            <option value="own">Own</option>
            </select><br/>
            </div>
           
           <div className="propertyapproved">
            <label  htmlFor="propertyAproved">Property Approved</label><br/>
            <select id="PropAproves" name="PropertyApprov">
            <option value="yes">Yes</option>
            <option value="no">No</option>
            </select><br/>
            </div>

            <div className="bankloan">
            <label  htmlFor="bankloan">Bank Loan</label><br/>
            <select id="Loans" name="loans">
            <option value="denied">Denied</option>
            <option value="approved">Approved</option>
            
            </select>
            </div>
            <div className="cncel">
            <button type="button">Cancel</button>
            </div>

            <div id="savecont">
                <Link to="/Generlinfo">
            <button id="btn2">Save&Continue</button>
            </Link>
            
            </div>
            
            </div>
            </form>
            
            </div>
 
  

    )
}
export default BasicInfo;