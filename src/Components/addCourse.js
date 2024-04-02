import React, { useState } from 'react';


const AddCourseForm = ({ onAdd }) => {
  const [courseName, setCourseName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCourse = {
      courseName: courseName
    };
    onAdd(newCourse);
    setCourseName('');
  };

  return (
    <div className="add-course-form">
      <h2>Add Course</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="courseName">Course Name:</label>
          <input
            type="text"
            id="courseName"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            className="form-input"
          />
        </div>
        <button type="submit" className="form-submit">Add Course</button>
      </form>
    </div>
  );
};

export default AddCourseForm;
