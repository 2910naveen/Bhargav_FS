import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


import '../styles/Users.css';
//import { addUserAsyncAction, getAllUsersAsyncAction, deleteUser,editUserAsyncAction } from "../store/userSlice";

const Education = () => {
    const { state } = useLocation();
    const [educationDetails, setEducationDetails] = useState({ highestdegree: "", fieldOfStudy: "", institutionName: "", graduationDate: "", gpa: "", email: "", firstname: "", lastname: "", address: "", phone: "" });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [date, setDate] = useState(new Date());

    // const handleDateChange = (date) => {
    //     setSelectedDate(date.toISOString().slice(0, 10));
    // };



    useEffect(() => {
        //dispatch(getAllUsersAsyncAction());
        console.log(state);
        setEducationDetails(state);
    }, []);

    const handleChange = (e) => {
        let newEducationDetails = { ...educationDetails }
        newEducationDetails[e.target.name] = e.target.value;
        setEducationDetails(newEducationDetails);
    }
    // const handleEdit = (usr) => {
    //     setIsEdit(true);
    //     setUser(usr)
    //     console.log(usr)
    // }
    // const handleDelete = (i) => {
    //     dispatch(deleteUser(i));
    // };
    // const addUser = () => {
    //     dispatch(addUserAsyncAction(user));
    // };
    // const updateUser = ()=>{
    //     dispatch(editUserAsyncAction(user));
    //     console.log("Updated user is : ",user)
    //     clearForm();
    // }
    // const clearForm=()=>{
    //     setEducationDetails({highestdegree:"",fieldOfStudy:"",institutionName:"",graduationDate:"",gpa:""});
    //     setIsEdit(false);
    // }   
    const handleSubmit = () => {
        //dispatch(addUserAsyncAction(user));
        navigate('/Workexperience', { state: educationDetails });
    }
    const handleSubmit2 = () => {
        //dispatch(addUserAsyncAction(user));
        navigate('/', { state: educationDetails });
    }
    return (
        <div className="container">
            <div >
                <h1>Step 2</h1><br/>
                <form className="row g-3">
                    <h1>Education</h1>
                    <label htmlFor="highestdegree" >Highest degree</label>
                    <input className="form-control" value={educationDetails.highestdegree} onChange={(e) => { handleChange(e) }} type="text" name="highestdegree" placeholder="Enter your highest degree" />
                    <label htmlFor="fieldOfStudy" >Field Of Study</label>
                    <input className="form-control" value={educationDetails.fieldOfStudy} onChange={(e) => { handleChange(e) }} type="text" name="fieldOfStudy" placeholder="Enter Field of Study" />
                    <label htmlFor="institutionName" >Institution Name</label>
                    <input className="form-control" value={educationDetails.institutionName} onChange={(e) => { handleChange(e) }} type="text" name="institutionName" placeholder="Enter your institution name" />
                    <label htmlFor="gpa" >Gpa</label>
                    <input className="form-control" value={educationDetails.gpa} onChange={(e) => { handleChange(e) }} type="text" name="gpa" placeholder="Enter your Gpa" />
                    <label htmlFor="graduationDate" >Graduation Date</label>
                    <input style={{
                        width: "100%",
                        padding: "12px 20px",
                        margin: "8px 0",
                        display: "inline-block",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        boxSizing: "border-box",
                        backgroundColor: "rgb(247, 241, 241)",
                        color: "#0c0c0c",
                    }} value={educationDetails.graduationDate} onChange={(e) => { handleChange(e) }} type="date" name="graduationDate" placeholder="Enter your Graduation date" />
                    <div className="col-md-1">
                        <button type="button" className="btn btn-primary" onClick={handleSubmit2}>Previous</button>
                    </div>
                    <div className="col-md-2">
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Next</button>
                    </div>
                    <div style={{ textAlign: "center", marginTop: "40px" }}>
                        <span class="step finish"></span>
                        <span class="step active"></span>
                        <span class="step"></span>
                        <span class="step"></span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Education;
