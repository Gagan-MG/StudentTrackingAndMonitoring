import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const StudentDetail = () => {
    const navigate = useNavigate()
    const [student, setStudent] = useState([])
    const {id} = useParams()
    useEffect(() => {
        axios.get('http://localhost:3000/student/detail/'+id)
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
    <div>
        <div className='p-2 d-flex justify-content-center shadow'>
            <h4>Student Tracking and Monitoring System</h4>
        </div>
        <div className='d-flex justify-content-center flex-column align-items-center mt-3'>
            <img src={`http://localhost:3000/Images`+student.image} className='stu_det_image' />
            <div className='d-flex align-items-center flex-column mt-5'>
                <h3>Name: {student.name}</h3>
                <h3>Email:  {student.email}</h3>
                <h3>Age: {student.age}</h3>
            </div>
            <div>
                <button className='btn btn-primary me-2'>Edit</button>
                <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
            </div>
        </div>
    </div>
  )
}

export default StudentDetail