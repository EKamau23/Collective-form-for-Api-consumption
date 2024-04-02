import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css'; // Import React Toastify CSS

function AddStudentForm({AddStudent}){
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');

  const  handleSubmit = (e) => {
    e.preventDefault();
    
    // Define the data to be sent with the request
    const data = {
      firstName: firstName,
      lastName: lastName,
      gender: gender
    };

    axios.post('http://localhost:4000/api/student/addStudent', data)
      .then(res => {
        toast.success("New student added successfully", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000 // 3 seconds
        });
      })
      .catch(error => {
        console.error('Error adding student:', error);
        toast.error("Error adding student", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000
        });
      });

    if (!firstName || !lastName || !gender) {
      alert('Please fill in all fields');
      return;
    }

    // Call the onAddStudent function with the new student data
    AddStudent({ firstName, lastName, gender });

    // Clear the form fields after submission
    setFirstName('');
    setLastName('');
    setGender('');
  };

  return (
    
    <form style={{ 
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      backgroundColor: '#f9f9f9'
    }} onSubmit={handleSubmit}>
      <div style={{ marginBottom: '20px' }} className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          style={{ 
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '5px'
          }}
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div style={{ marginBottom: '20px' }} className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input
          style={{ 
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '5px'
          }}
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div style={{ marginBottom: '20px' }} className="form-group">
        <label htmlFor="gender">Gender</label>
        <select
          style={{ 
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            height: '34px'
          }}
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <button style={{ 
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        cursor: 'pointer'
      }} type="submit">Add Student</button>
    </form>
  );
}

export default AddStudentForm;