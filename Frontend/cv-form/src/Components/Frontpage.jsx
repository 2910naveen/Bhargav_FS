import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function FrontPage() {

    const [details, setDetails] = useState({ name: "", email: "" })
    const [valid, setValid] = useState(false);

    const navigate = useNavigate();
    const handleChange = (e) => {
        let newUser = { ...details }
        newUser[e.target.name] = e.target.value;
        setDetails(newUser);
        console.log(newUser);
    }
    
    const divStyle = {
        backgroundImage: 'url("https://www.google.com/imgres?imgurl=https%3A%2F%2Fmma.prnewswire.com%2Fmedia%2F1807312%2Fincedo_Logo.jpg%3Fp%3Dtwitter&tbnid=tcuTroDuytNtWM&vet=12ahUKEwjy05v93OL9AhXi-HMBHXuXBY0QMygFegUIARDeAQ..i&imgrefurl=https%3A%2F%2Fwww.prnewswire.com%2Fnews-releases%2Fincedos-ai-driven-platform-and-ceo-named-finalists-in-thinkadvisor-luminaires-competition-301677850.html&docid=uc0wPjJuMAmKlM&w=1200&h=316&q=incedo&ved=2ahUKEwjy05v93OL9AhXi-HMBHXuXBY0QMygFegUIARDeAQ")',
        backgroundSize: 'cover',
        height: '100vh'
      };
    
    function handleEmailChange(details) {
        const value = details.email;
        const isValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value);
        setValid(isValid);
      }
    

    function handleSubmit() {
        // Handle form submission
          handleEmailChange(details);
        axios.post("http://localhost:3002/searchUser", details)
            .then((response) => {
                console.log(response.data);
                if(valid){
                if (response.data.length !== 0) {
                    alert("User already exists");
                }
                else if (details.name == "") {
                    alert("Enter your details")
                }
                else {
                    navigate('/', { state: details });
                }
            }
            })
            .catch((error) => {
                console.log(error);
            });

    }

    return (
        <div className='container' style={divStyle}>
            <h1>Welcome to Incedo</h1>

            <p>Please fill out the following information:</p>
            <form>
                <label>
                    First Name:
                    {/*<input className="form-control" value={user.firstname} onChange={(e) => { handleChange(e) }} type="text" name="firstname" placeholder="Enter your first name" required aria-required="true"/>*/}
                </label>
                <input className="form-control" value={details.name} onChange={(e) => { handleChange(e) }} type="text" name="name" required placeholder='Enter your firstname' />
                <label>
                    Email:
                </label>
                <input className="form-control" style={{
            width: "100%",
            padding: "12px 20px",
            margin: "8px 0",
            display: "inline-block",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxSizing: "border-box",
            backgroundColor: "rgb(247, 241, 241)",
            color: "#0c0c0c",
          }} type="email" value={details.email} onChange={(e) => { handleChange(e) }} name="email" required placeholder='Enter your email' />
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