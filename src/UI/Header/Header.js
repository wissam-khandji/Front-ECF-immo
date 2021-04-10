import React from "react"; 
import { NavLink } from "react-router-dom";
import Navbar from "../Nav/Navbar";


const header = (props) => (
    <>
        <div className="container-fluid">
            <div className="row justify-content-between align-items-center">
                <h1 className="col-md-3 p-3">Logo</h1>
                <div className="col-md-3 p-3">
                    <NavLink to='/login' exact className="btn btn-outline-primary  rounded-pill" > Login </NavLink>
                </div>
            </div>

        </div>
       <Navbar />
        
    </>
);

export default header;