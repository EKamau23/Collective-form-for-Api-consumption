import React from 'react';
import './index.css';
import AddStudentForm from './Components/addStudent';
import RegForm from './Components/RegForm';
import AddCourseForm from './Components/addCourse';
// import GetAllStudent from './Components/getAllStudent';

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import NavigationBar from './NavigationBar';
// import AddStudentForm from './AddStudentForm';
// import RegForm from './RegForm';
// import AddCourseForm from './AddCourseForm';

function App() {
  return (
<div className="App">
<AddStudentForm/>
<br></br>
<RegForm/>
<br></br>
<AddCourseForm/>

{/* <Router> */}
      {/* <div> */}
        {/* <NavigationBar /> */}
        {/* <Switch> */}
          {/* <Route path="/add-student"> */}
            {/* <AddStudentForm /> */}
          {/* </Route> */}
          {/* <Route path="/registration"> */}
          {/* <RegForm/> */}
          {/* </Route> */}
          {/* <Route path="/add-course"> */}
            {/* <AddCourseForm /> */}
          {/* </Route> */}
        {/* </Switch> */}
      {/* </div> */}
    {/* </Router> */}

    </div>
  );
}

export default App;
