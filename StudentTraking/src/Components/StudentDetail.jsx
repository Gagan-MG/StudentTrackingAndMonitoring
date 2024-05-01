// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { useParams, useNavigate } from 'react-router-dom'

// const StudentDetail = () => {
//     const navigate = useNavigate()
//     const [student, setStudent] = useState([])
//     const {id} = useParams()
//     useEffect(() => {
//         axios.get('http://localhost:3000/student/detail/'+id)
//         .then(result => {
//             setStudent(result.data[0])
//         })
//         .catch(err => console.log(err))
//     }, [])
//     const handleLogout = () => {
//         axios.get('http://localhost:3000/student/logout')
//         .then(result => {
//             if(result.data.Status) {
//                 localStorage.removeItem("valid")
//                 navigate('/')
//             }
//         }).catch(err => console.log(err))
//     } 
//   return (
//     <div>
//         <div className='p-2 d-flex justify-content-center shadow'>
//             <h4>Student Tracking and Monitoring System</h4>
//         </div>
//         <div className='d-flex justify-content-center flex-column align-items-center mt-3'>
//             <img src={`http://localhost:3000/Images`+student.image} className='stu_det_image' />
//             <div className='d-flex align-items-center flex-column mt-5'>
//                 <h3>Name: {student.name}</h3>
//                 <h3>Email:  {student.email}</h3>
//                 <h3>Age: {student.age}</h3>
//             </div>
//             <div>
//                 <button className='btn btn-primary me-2'>Edit</button>
//                 <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default StudentDetail

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams, Outlet } from 'react-router-dom'
import "bootstrap-icons/font/bootstrap-icons.css";
import MyDashboard from './MyDashboard'
import MyProfile from './MyProfile';
// import './MyDashboard.css'

const StudentDetail = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [student, setStudent] = useState({})
    axios.defaults.withCredentials = true
    
    useEffect(() => {
        axios.get(`http://localhost:3000/student/detail/${id}`)
        .then(result => {
            setStudent(result.data[0])
        })
        .catch(err => console.log(err))
    }, [])
    
    const handleLogout = () => {
        axios.get('http://localhost:3000/student/logout')
        .then(result => {
            if(result.data.Status) {
                localStorage.removeItem("valid")
                navigate('/')
            }
        }).catch(err => console.log(err))
    } 

    return (
        <div className='container-fluid'>
            <div className='row flex-nowrap'>
                <div className='col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark'>
                    <div className='d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100'>
                        <Link to="/dashboard" className='d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none'>
                            <span className='fs-5 fw-bolder d-none d-sm-inline'>Student Tracking and Monitoring</span>
                        </Link>
                        <ul className='nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start' id='menu'>
                            <li className='w-100'>
                            <Link to={`/student_detail/${id}/my_dashboard`} className='nav-link text-white px-0 align-middle'>
                                    <i className='fs-4 bi-speedometer2 ms-2'></i>
                                    <span className='ms-2 d-none d-sm-inline'>Dashboard</span>
                                </Link>
                            </li>
                            <li className='w-100'>
                                <Link to={`/student_detail/${id}/my_dashboard/my_profile`} className='nav-link px-0 align-middle text-white'>
                                    <i className='fs-4 bi-person ms-2'></i>
                                    <span className='ms-2 d-none d-sm-inline'>Profile</span>
                                </Link>
                            </li>
                            <li className='w-100' onClick={handleLogout}>
                                <Link className='nav-link px-0 align-middle text-white'>
                                    <i className='fs-4 bi-power ms-2'></i>
                                    <span className='ms-2 d-none d-sm-inline'>Logout</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='col p-0 m-0'>
                <div className='p-2 d-flex justify-content-center shadow'>
                    <h4>Student Management System</h4>
                </div>
                <div className='dashboard--content'>
                {/* <MyDashboard></MyDashboard>
                <MyProfile></MyProfile> */}
                <Outlet></Outlet>
                </div>
                </div>                
            </div>
        </div>
    )
}

export default StudentDetail
