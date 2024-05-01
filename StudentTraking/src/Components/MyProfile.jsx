import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './MyDashboard.css';
import { Card } from 'react-bootstrap';

const MyProfile = () => {
    const [student, setStudent] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/student/my_profile/${id}`)
            .then(result => {
                setStudent(result.data[0]);
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleLogout = () => {
        axios.get('http://localhost:3000/student/logout')
            .then(result => {
                if (result.data.Status) {
                    localStorage.removeItem("valid");
                    navigate('/');
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <div className='profile-container'>
                <div className='profile-pic'>
                    <img src={`http://localhost:3000/Images/` + student.image} className='profile-image' />
                 </div>
                <div className='profile-details'>
                    <h3>Name: {student.name}</h3>
                    <h3>Email: {student.email}</h3>
                </div>
            </div>
        </div>
    //     <div className="container">
    //     <Card className="text-center">
    //         <Card.Body>
    //             <div className="profile-pic">
    //                 <img src={`http://localhost:3000/Images/` + student.image} className="profile-image img-fluid" alt="Profile" />
    //             </div>
    //             <div className="profile-details">
    //                 <h3 className="card-title">Name: {student.name}</h3>
    //                 <h3 className="card-subtitle mb-2 text-muted">Email: {student.email}</h3>
    //             </div>
    //         </Card.Body>
    //     </Card>
    // </div>
    );
};

export default MyProfile;

