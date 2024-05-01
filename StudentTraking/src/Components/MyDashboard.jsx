// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { Link, useNavigate, useParams } from 'react-router-dom'
// const MyDashboard = () => {
// //     const navigate = useNavigate()
// //     const { id } = useParams()
// //     const [student, setStudent] = useState([])
// //     useEffect(() => {
// //         axios.get(`http://localhost:3000/student/detail/${id}`)
// //         .then(result => {
// //             setStudent(result.data[0])
// //         })
// //         .catch(err => console.log(err))
// //     }, [])
// //   return (
// //     <div>
// //         <div className='p-2 d-flex justify-content-center shadow'>
// //             {/* <h4>Student Tracking and Monitoring System</h4> */}
// //         </div>
// //         <div className='d-flex justify-content-center flex-column align-items-center mt-3'>
// //             <img src={`http://localhost:3000/Images`+student.image} className='stu_det_image' />
// //             <div className='d-flex align-items-center flex-column mt-5'>
// //                 <h3>Name: {student.name}</h3>
// //                 <h3>Email:  {student.email}</h3>
// //                 <h3>Age: {student.age}</h3>
// //             </div>
// //         </div>
// //     </div>
// //   )
// return(
//     <div >
//         <h4 className='text-left p-4 m-2'>Welcome to Your Dashboard</h4>
//     <div className='container'>
//     <Link to="https://gpsprojectggh.000webhostapp.com/" className='btn btn-success'>
//         Track Student
//     </Link>
//     </div>
// </div>
// )
// }

// export default MyDashboard

// import React from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { FaLocationDot } from "react-icons/fa6";
// import { IoBarChartOutline } from "react-icons/io5";
// import { SlCalender } from "react-icons/sl";
// import './MyDashboard.css';

// const component = [
//     {
//         title: "Track-Me",
//         icon: <FaLocationDot />,
//         onClick: () => {
//             console.log("Track-Me button clicked");
//             window.location.href = 'https://gpsprojectggh.000webhostapp.com/';
//         },
//     },
//     {
//         title: "View-Marks",
//         icon: <IoBarChartOutline />,
//         onClick: () => {
//             console.log("View-Marks button clicked");
//             // Replace the following URL with the correct path
//             window.location.href = '/student_detail/:id/my_dashboard/my_profile';
//         },
//     },
//     {
//         title: "Cal-of-Events",
//         icon: <SlCalender />,
//         onClick: () => {
//             console.log("View-Marks button clicked");
//             // Replace the following URL with the correct path
//             navigate(`/student_detail/${id}/my_dashboard/my_profile`);
//         },        
//     },
// ];

// const MyDashboard = () => {
//     const navigate = useNavigate();
//     const { id } = useParams();

//     const navigateToProfile = (path) => {
//         const newPath = path.replace(':id', id);
//         navigate(newPath);
//     };

//     return (
//         <div>
//             <div className='content-header'>
//                 <h3 className='header--title'>Dashboard</h3>
//                 <div className="header--acticity"></div>
//             </div>
//             <div className='card--container'>
//                 {component.map((item, index) => (
//                     <div className="card" key={index} onClick={() => item.onClick && item.onClick()}>
//                         <div className="card--cover">{item.icon}</div>
//                         <div className="card--title">
//                             <h2>{item.title}</h2>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default MyDashboard;

import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { IoBarChartOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import './MyDashboard.css';

const MyDashboard = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const navigateToProfile = (path) => {
        const newPath = path.replace(':id', id);
        navigate(newPath);
    };

    const handleClick = (path) => {
        const newPath = path.replace(':id', id);
        navigate(newPath);
    };

    const component = [
        {
            title: "Track-Me",
            icon: <FaLocationDot />,
            onClick: () => {
                console.log("Track-Me button clicked");
                window.location.href = 'https://gpsprojectggh.000webhostapp.com/';
            },
        },
        {
            title: "View-Marks",
            icon: <IoBarChartOutline />,
            onClick: () => {
                console.log("View-Marks button clicked");
                // Replace the following URL with the correct path
                handleClick('/student_detail/:id/my_dashboard/my_profile');
            },
        },
        {
            title: "Cal-of-Events",
            icon: <SlCalender />,
            onClick: () => {
                console.log("Cal-of-Events button clicked");
                // Replace the following URL with the correct path
                handleClick('/student_detail/:id/my_dashboard/my_profile');
            },
        },
    ];

    return (
        <div>
            <div className='content-header'>
                <h3 className='header--title'>Dashboard</h3>
                <div className="header--acticity"></div>
            </div>
            <div className='card--container'>
                {component.map((item, index) => (
                    <div className="card" key={index} onClick={() => item.onClick && item.onClick()}>
                        <div className="card--cover">{item.icon}</div>
                        <div className="card--title">
                            <h2>{item.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyDashboard;