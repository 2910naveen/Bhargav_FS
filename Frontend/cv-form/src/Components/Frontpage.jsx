import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function FrontPage() {

    const [details, setDetails] = useState({ name: "", email: "" })
    const navigate = useNavigate();
    const handleChange = (e) => {
        let newUser = { ...details }
        newUser[e.target.name] = e.target.value;
        setDetails(newUser);
        console.log(newUser);
    }
    function handleSubmit() {
        // Handle form submission
        axios.post("http://localhost:3002/searchUser", details)
            .then((response) => {
                console.log(response.data);
                if(response.data.length!==0)
                {
                    alert("User already exists");
                }
                else if(details.name=="")
                {
                    alert("Enter your details")
                }
                else{
                navigate('/',{state:details});
                }
            })
            .catch((error) => {
                console.log(error);
            });

    }

    return (
        <div className='container'>
            <h1>Welcome to Incedo</h1>
            
            <p>Please fill out the following information:</p>
            <form>
                <label>
                   First Name:
                    {/*<input className="form-control" value={user.firstname} onChange={(e) => { handleChange(e) }} type="text" name="firstname" placeholder="Enter your first name" required aria-required="true"/>*/}
                </label>
                <input className="form-control" value={details.name} onChange={(e) => { handleChange(e) }} type="text" name="name" required placeholder='Enter your firstname'/>
                <label>
                    Email:
                </label>
                <input className="form-control" type="text" value={details.email} onChange={(e) => { handleChange(e) }} name="email" required placeholder='Enter your email'/>
                <button type="button" className="btn btn-warning" onClick={handleSubmit}>Proceed</button>
            </form>
        </div>
    );
}

export default FrontPage;





// axios.post("http://localhost:3002/searchUser",details)
// .then((response) => {
//   console.log(response);
//   setSubmitted(true);
//   if(response.data.length!==0)
//   {
//       alert("User already exists");
//   }
//   else if(details.name=="")
//   {
//       alert("Enter")
//   }
//   else{
//   navigate('/');
//   }
// })
// .catch((error) => {
//   console.log(error);
// });