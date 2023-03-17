import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import '../styles/Users.css';
//import { addUserAsyncAction, getAllUsersAsyncAction, deleteUser,editUserAsyncAction } from "../store/userSlice";

const Workexperience = () => {
    const { state } = useLocation();
    const [workDetails, setWorkDetails] = useState({ currentjob: "", companyName: "", startDate: "", endDate: "", jobDescription: "", highestdegree: "", fieldOfStudy: "", institutionName: "", graduationDate: "", gpa: "", email: "", firstname: "", lastname: "", address: "", phone: "" });
    const [isEdit, setIsEdit] = useState(false);
    //const usersDetails = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        //dispatch(getAllUsersAsyncAction());
        setWorkDetails(state);
    }, []);

    const handleChange = (e) => {
        let newEducationDetails = { ...workDetails }
        newEducationDetails[e.target.name] = e.target.value;
        setWorkDetails(newEducationDetails);
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
    //     setWorkDetails({currentjob:"",companyName:"",startDate:"",endDate:"",jobDescription:""});
    //     setIsEdit(false);
    // }   
    const handleSubmit = () => {
        //dispatch(addUserAsyncAction(user));
        console.log("Work experience ", workDetails);
        navigate('/Cvupload', { state: workDetails });
    }
    const handleSubmit2 = () => {
        //dispatch(addUserAsyncAction(user));
        navigate('/Education', { state: workDetails });
    }
    return (
        <div className="container">
            <h1>Step 3</h1>
            <br/>
            <form>
                <h1>Work Experience</h1>
                <label htmlFor="currentjob" >Current job or Most recent job</label>
                <input className="form-control" value={workDetails.currentjob} onChange={(e) => { handleChange(e) }} type="text" name="currentjob" placeholder="Enter your current job" />
                <label htmlFor="companyName" >Company Name</label>
                <input className="form-control" value={workDetails.companyName} onChange={(e) => { handleChange(e) }} type="text" name="companyName" placeholder="Enter your company name" />
                <label htmlFor="jobDescription" >Job Description</label>
                <input className="form-control" value={workDetails.jobDescription} onChange={(e) => { handleChange(e) }} type="text" name="jobDescription" placeholder="Enter job description" />
                <label htmlFor="startDate" >Start Date</label>
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
                }} value={workDetails.startDate} onChange={(e) => { handleChange(e) }} type="date" name="startDate" placeholder="Enter start date (DD/MM/YYYY)" />
                <label htmlFor="endDate" >End Date</label>
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
                }} value={workDetails.endDate} onChange={(e) => { handleChange(e) }} type="date" name="endDate" placeholder="Enter end date (DD/MM/YYYY)" /><br />
                <button type="button" className="btn btn-warning" onClick={handleSubmit2}>Previous</button>
                <button type="button" className="btn btn-danger" onClick={handleSubmit}>Next</button>
                <div style={{ textAlign: "center", marginTop: "40px" }}>
                    <span class="step finish"></span>
                    <span class="step finish"></span>
                    <span class="step active"></span>
                    <span class="step"></span>
                </div>
            </form>
        </div>
    );
};

export default Workexperience;
