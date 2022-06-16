import React from "react";
import {Link} from "react-router-dom";
import './General.css';
const Generlinfo =  () => {
    return (
        <div className="s3-Container">
            <form className="General">
                <div className="generalinfo">

                <div className="name">
            <label for="name">Name</label><br/>
            <select id="nme" name="Name">
            <option value="owner">Owner</option>
            <option value="renter">Renter</option>
            </select><br/>
            </div>

            <div className="posted">
            <label for="Posted">Posted By</label><br/>
            <select id="post" name="Posts">
            <option value="owner">Owner</option>
            <option value="mediater">Mediater</option>
            </select><br/>
            </div>

            <div className="package">
            <label for="PT">Featured Package</label><br/>
            <select id="Pack" name="Packages">
            <option value="discount">Discount</option>
            <option value="regester">Regester</option>
            </select><br/>
            </div>

            <div className="mobile">
            <label for="calls">Mobile</label><br/>
            <input type="text" id="ProDes" name="ProDes" placeholder="Enter  mobile number" />
            </div><br/>

            <div className="sales">
            <label for="sales">Sale Type</label><br/>
            <select id="Sales" name="sold">
            <option value="cash">Accountable</option>
            <option value="regester">Regesteration</option>
            </select><br/>
            </div>

            <div className="PPD">
            <label for="ppd">PPD Package</label><br/>
            <select id="PPdetails" name="pd">
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