import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Success.css"


const SuccessMessage = () => {
    const navigate=useNavigate();
    const handleSubmit=()=>{
        navigate('/CVform');
    }
    return(
    <div className="success-message">
      <p>Successfully submitted the form</p>
      <button type='button' className='btn btn-danger' onClick={handleSubmit}>Back to Home page</button>
    </div>);
};
  
  export default SuccessMessage;
  