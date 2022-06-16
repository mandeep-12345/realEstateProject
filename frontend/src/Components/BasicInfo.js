import React from "react";
import './Basic.css';
import {Link} from "react-router-dom";
const BasicInfo =  () => {
    return (
        <div className="container">
        
            <form className="Basic">
            <div className="Basicinfo">
                <div className="PT">
            <label for="PT">Property Type</label><br/>
            <select id="property" name="Propertys">
            <option value="land">Land</option>
            <option value="flat">Flat</option>
            <option value="house">House</option>
            </select><br/>
            </div>
            <div className="Rate">
            <label for="price">Price</label><br/>
            <input type="text" id="price" name="price" placeholder="Example:10000" size="35"/>
            </div><br/>

            <div className="Age">

            <label for="PA">Property Age</label><br/>
            <select id="propertyage" name="PropertysAge" >
            <option value="5years">5Years</option>
            <option value="15years">15Years</option>
            <option value="20years">20Years</option>
            </select><br/>
            </div>
            
            <div className="Pd">
            <label for="PD">Property Description</label><br/>
            <input type="text" id="ProDes" name="ProDes" size="35"/>
            </div><br/>
            
            <div className="Negotable">
            <label for="Negotable">Negotable</label><br/>
            <select id="SelectNegotable" name="Talks">
            <option value="phone call">Phone Call</option>
            <option value="mediater">Mediater</option>
            </select><br/>
            </div>
            
            <div className="OwnerShip">
            <label for="OS">Ownership</label><br/>
            <select id="SelectOW" name="ownership">
            <option value="rent">Rent</option>
            <option value="own">Own</option>
            </select><br/>
            </div>
           
           <div className="propertyapproved">
            <label for="propertyAproved">Property Approved</label><br/>
            <select id="PropAproves" name="PropertyApprov">
            <option value="yes">Yes</option>
            <option value="no">No</option>
            </select><br/>
            </div>

            <div className="bankloan">
            <label for="bankloan">Bank Loan</label><br/>
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