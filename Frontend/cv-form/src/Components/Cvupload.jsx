import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { addUserAsyncAction } from "../store/userSlice";
import { useDispatch } from "react-redux";
const Cvupload = () => {

  const { state } = useLocation();
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const [details, setDetails] = useState({ currentjob: "", companyName: "", startDate: "", endDate: "", jobDescription: "", highestdegree: "", fieldOfStudy: "", institutionName: "", graduationDate: "", gpa: "", email: "", firstname: state.name, lastname: "", address: "", phone: "" })
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };
  useEffect(() => {
    console.log("cv upload", state);
    setDetails(state);
  }, []);
  const handleChange = (e) => {
    let newUser = { ...details }
    newUser[e.target.name] = e.target.value;
    setDetails(newUser);
  }

  const handleSubmit = () => {
    if(submitted){
    axios.post("http://localhost:3002/addUser", details)
      .then((response) => {
        console.log(response);
        alert("User added");
      })
      .catch((error) => {
        console.log(error);
      });
    //dispatch(addUserAsyncAction(details));
    navigate('/Success');
    }
  }
  const handleSubmit2 = () => {
    //dispatch(addUserAsyncAction(user));
    //navigate('/Workexperience',{state:details});
  }
  const handleUpload = () => {
    setSubmitted(true);
    const formData = new FormData();
    formData.append("pdf", file);
    if(submitted){
      
    
    axios
      .post("http://localhost:3002/api/upload-pdf", formData)
      .then((response) => {
        console.log(response);
        alert("File uploaded");
      })
      .catch((error) => {
        console.log(error);
      });
    }
    else{
      alert("Upload the cv file")
    }
  };

  return (
    <div className="contanier" >
      <h1>Review your Details</h1><br />
      <form class="row g-3">
        <h2>Personal Details</h2>
        <div className="col-md-4">

          <label htmlFor="firstname" className="form-label">First Name </label>
          <input className="form-control" value={state.name} onChange={(e) => { handleChange(e) }} type="text" name="firstname" disabled />
        </div>
        <div className="col-md-4">
          <label htmlFor="lastname" className="form-label" >Last Name {" "}</label>
          <input className="form-control" value={details.lastname} onChange={(e) => { handleChange(e) }} type="text" name="lastname" disabled /><br />
        </div>
        <div className="col-md-4">
          <label htmlFor="email" className="form-label">Email ID </label>
          <input className="form-control" value={details.email} onChange={(e) => { handleChange(e) }} type="text" name="email" disabled />
        </div>
        <div className="col-md-6">
          <label htmlFor="phone" className="form-label">Phone Number {" "}</label>
          <input className="form-control" value={details.phone} onChange={(e) => { handleChange(e) }} type="text" name="phone" /><br />
        </div>
        <div className="col-md-6">
          <label htmlFor="address" className="form-label">Address </label>
          <input className="form-control" value={details.address} onChange={(e) => { handleChange(e) }} type="text" name="address" />
        </div>
        <h2>Education</h2>
        <div className="col-md-4">
          <label htmlFor="highestdegree" >Highest degree</label>
          <input className="form-control" value={details.highestdegree} onChange={(e) => { handleChange(e) }} type="text" name="highestdegree" />
        </div>
        <div className="col-md-4">
          <label htmlFor="fieldOfStudy"  >Field Of Study</label>
          <input className="form-control" value={details.fieldOfStudy} onChange={(e) => { handleChange(e) }} type="text" name="fieldOfStudy" />
        </div>
        <div className="col-md-4">
          <label htmlFor="institutionName" >Institution Name</label>
          <input className="form-control" value={details.institutionName} onChange={(e) => { handleChange(e) }} type="text" name="institutionName" />
        </div>
        <div className="col-md-4">
          <label htmlFor="gpa" >Gpa</label>
          <input className="form-control" value={details.gpa} onChange={(e) => { handleChange(e) }} type="text" name="gpa" />
        </div>
        <div className="col-md-4">
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
          }} value={details.graduationDate} onChange={(e) => { handleChange(e) }} type="date" name="graduationDate" />
        </div>
        <h2>Work Experience</h2>
        <div className="col-md-4">
          <label htmlFor="currentjob" >Current job or Most recent job</label>
          <input className="form-control" value={details.currentjob} onChange={(e) => { handleChange(e) }} type="text" name="currentjob" />
        </div>
        <div className="col-md-4">
          <label htmlFor="companyName" >Company Name</label>
          <input className="form-control" value={details.companyName} onChange={(e) => { handleChange(e) }} type="text" name="companyName" /><br />
        </div>
        <div className="col-md-4">
          <label htmlFor="jobDescription" >Job Description</label>
          <input className="form-control" value={details.jobDescription} onChange={(e) => { handleChange(e) }} type="text" name="jobDescription" />
        </div>
        <div className="col-md-4">
          <label htmlFor="startDate"  >Start Date</label>
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
          }} value={details.startDate} onChange={(e) => { handleChange(e) }} type="date" name="startDate" />
        </div>
        <div className="col-md-4">
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
          }} value={details.endDate} onChange={(e) => { handleChange(e) }} type="date" name="endDate" /><br />
        </div>

        <h2>Upload CV</h2>
        <div className="col-md-6">
          <input type="file" onChange={handleFileUpload} required/>
          {submitted && <span className="required-text">*This field is required</span>}
        </div>
        <div className="col-md-4">
          <button type="button" className="btn btn-warning" onClick={handleUpload}>Upload</button><br />
        </div>
        {/*<button type="button" className="btn btn-primary" onClick={handleSubmit2}>Previous</button>*/}
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
            {submitted && <span className="required-text">*This field is required</span>}
              <label className="form-check-label" for="invalidCheck">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
          </div>
        </div>

        <div className="col-12">
          <button type="button" className="btn btn-danger" onClick={handleSubmit}>Submit</button>
        </div>
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <span class="step finish"></span>
          <span class="step finish"></span>
          <span class="step finish"></span>
          <span class="step active"></span>
        </div>
      </form>

    </div>
  );
};

export default Cvupload;


