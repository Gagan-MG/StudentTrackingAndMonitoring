import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/Login'
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import Student from './Components/Student';
import Category from './Components/Category';
import Profile from './Components/Profile';
import AddCategory from './Components/AddCategory';
import AddStudent from './Components/AddStudent';
import EditStudent from './Components/EditStudent';
import Start from './Components/Start';
import StudentLogin from './Components/StudentLogin';
import StudentDetail from './Components/StudentDetail';
import { useEffect } from 'react';
import axios from 'axios'
import PrivateRoute from './Components/PrivateRoute';
import EnterMarks from './Components/EnterMarks';
import MyDashboard from './Components/MyDashboard';
import MyProfile from './Components/MyProfile';

function App() {

  return (
    <div className='grid-container'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Start />}></Route>
      <Route path='/adminlogin' element={<Login />}></Route>
      <Route path='/student_login' element={<StudentLogin />}></Route>
      {/* <Route path='/student_detail/:id' element={<StudentDetail />}></Route> */}
      <Route path='/student_detail/:id/my_dashboard' element={ <StudentDetail />} >         
        <Route path='' element={<MyDashboard/>}></Route>
        <Route path='my_profile' element={<MyProfile/>}></Route>
      </Route>
      <Route path='/dashboard' element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      }>
        <Route path='' element={<Home />}></Route>
        <Route path='/dashboard/student' element={<Student />}></Route>
        <Route path='/dashboard/category' element={<Category />}></Route>
        <Route path='/dashboard/profile' element={<Profile />}></Route>
        <Route path='/dashboard/add_category' element={<AddCategory />}></Route>
        <Route path='/dashboard/add_student' element={<AddStudent />}></Route>
        <Route path='/dashboard/edit_student/:id' element={<EditStudent />}></Route>        
        <Route path='/dashboard/enter_marks/:id' element={<EnterMarks />}></Route>
        {/* <Route path='/dashboard/enter_marks/:id' element={<EnterMarks />}></Route> */}
      </Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;