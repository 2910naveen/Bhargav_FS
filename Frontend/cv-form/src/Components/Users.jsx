import React from "react"; 
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import '../styles/Users.css';
//import { addUserAsyncAction, getAllUsersAsyncAction, deleteUser,editUserAsyncAction } from "../store/userSlice";

const Users = () => {
    const {state}=useLocation();
    const [user, setUser] = useState({email:state.email,firstname:state.name,lastname:"",address:"",phone:""});
    const [submitted, setSubmitted] = useState(false);

    const[isEdit, setIsEdit] = useState(true);
    const usersDetails = useSelector((state) => state.users);
    console.log("Redux users ",usersDetails);
    console.log(user," user details");
    const dispatch = useDispatch();
    const navigate=useNavigate();
    //console.log("Users state is ",state);
    useEffect(() => {
        //dispatch(getAllUsersAsyncAction());
        if(state == null)
           {setUser(user);}
        else
        {
            setUser(state);
        }
    }, []);
    
    const handleChange=(e)=>{
        let newUser={...user}
        newUser[e.target.name]=e.target.value;
        setUser(newUser);
    }

    const clearForm=()=>{
        setUser({email:"",firstname:"",address:""});
        //setIsEdit(false);
    }
    const handleSubmit=()=>{
        //dispatch(addUserAsyncAction(user));
        setSubmitted(true);
        if(user.firstname!=="" && user.lastname!==""){
        navigate('/Education',{state:user});
        clearForm();
        }
    }
    return (

        <div className="container">
            <h1>Step : 1</h1><br/>
            <form>
                <h1>Personal Details</h1>
                <label htmlFor="firstname" >First Name</label>
                <input className="form-control" value={user.firstname} onChange={(e) => { handleChange(e) }} type="text" name="firstname" placeholder="Enter your first name" required />
               {submitted && <span className="required-text">*This field is required</span>} {/* Display message */}
                <label htmlFor="lastname" >Last Name</label>
                <input className="form-control" value={user.lastname} onChange={(e) => { handleChange(e) }} type="text" name="lastname" placeholder="Enter your last name" required />
                {submitted && <span className="required-text">*This field is required</span>} {/* Display message */}
                <label htmlFor="email" >Email ID</label>
                <input className="form-control" value={user.email} onChange={(e) => { handleChange(e) }} type="text" name="email" placeholder="Enter email id" required />
                {submitted && <span className="required-text">*This field is required</span>} {/* Display message */}
                <label htmlFor="phone" >Phone Number</label>
                <input className="form-control" value={user.phone} onChange={(e) => { handleChange(e) }} type="text" name="phone" placeholder="Enter your number"/>
                <label htmlFor="address" >Address</label>
                <input className="form-control" value={user.address} onChange={(e) => { handleChange(e) }} type="text" name="address" placeholder="Enter your address" />
                <button className="btn btn-warning" onClick={handleSubmit}>Next</button>
                <div style={{textAlign:"center",marginTop:"40px"}}>
                    <span class="step active"></span>
                    <span class="step"></span>
                    <span class="step"></span>
                    <span class="step"></span>
                </div>
                </form>
        </div>
            );
};

export default Users;

