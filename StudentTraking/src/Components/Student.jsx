import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'

const Student = () => {
  const [student, setStudent] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/auth/student')
      .then(result => {
        if (result.data.Status) {
          setStudent(result.data.Result);
        } else {
          alert(result.data.Error)
        }
      }).catch(err => console.log(err))
  }, [])
  return (
    <div className='px-5 mt-3'>
      <div className='d-flex justify-content-center'>
        <h3>Student List</h3>
      </div>
      <Link to="/dashboard/add_student" className='btn btn-success'>
        Add Student</Link>
      <div className='mt-3'>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Email</th>
              <th>Address</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              student.map((e) => (
                <tr>
                  <td>{e.name}</td>
                  <td>
                    <img 
                      src={`http://localhost:3000/Images/` + e.image} 
                      className='student_image' 
                    />
                  </td>
                  <td>{e.email}</td>
                  <td>{e.address}</td>
                  <td>{e.age}</td>
                  <td>
                    <Link to={`/dashboard/edit_student/`+ e.id} className='btn btn-info btn-sm me-2'>Edit</Link>
                    <button className='btn btn-warning btn-sm'>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Student