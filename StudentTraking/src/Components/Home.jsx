import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

const Home = () => {
  const [adminTotal, setAdminTotal] = useState(0)
  const [studentTotal, setStudentTotal] = useState(0)
  const [ageTotal, setAgeTotal] = useState(0)
  const [admins, setAdmins] = useState([])

  useEffect(() => {
    adminCount();
    studentCount();
    ageCount();
    AdminRecords();
  }, [])

  const AdminRecords = () => {
    axios.get('http://localhost:3000/auth/admin_records')
    .then(result => {
      if(result.data.Status) {
        setAdmins(result.data.Result)
      } else {
         alert(result.data.Error)
      }
    })
  }
  const adminCount = () => {
    axios.get('http://localhost:3000/auth/admin_count')
    .then(result => {
      if(result.data.Status) {
        setAdminTotal(result.data.Result[0].admin)
      }
    })
  }
  const studentCount = () => {
    axios.get('http://localhost:3000/auth/student_count')
    .then(result => {
      if(result.data.Status) {
        setStudentTotal(result.data.Result[0].student)
      }
    })
  }
  const ageCount = () => {
    axios.get('http://localhost:3000/auth/age_count')
    .then(result => {
      if(result.data.Status) {
        setAgeTotal(result.data.Result[0].ageOFStu)
      } else {
        alert(result.data.Error)
      }
    })
  }
  return (
    <div>
      <div className='p-3 d-flex justify-content-around mt-3'>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
          <div className='text-center pb-1'>
            <h4>Admin</h4>
          </div>
          <hr />
          <div className='d-flex justify-content-between'>
            <h5>Total:</h5>
            <h5>{adminTotal}</h5>
          </div>
        </div>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
          <div className='text-center pb-1'>
            <h4>Student</h4>
          </div>
          <hr />
          <div className='d-flex justify-content-between'>
            <h5>Total:</h5>
            <h5>{studentTotal}</h5>
          </div>
        </div>
        {/* <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
          <div className='text-center pb-1'>
            <h4>Age</h4>
          </div>
          <hr />
          <div className='d-flex justify-content-between'>
            <h5>Total:</h5>
            <h5>{ageTotal}</h5>
          </div>
        </div> */}
      </div>
      <div className='mt-4 px-5 pt-3'>
        <h3>List of Admins</h3>
        <table className='table'>
          <thead>
            <tr>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              admins.map(a => (
                <tr>
                  <td>{a.email}</td>
                  <td>
                  <button
                    className="btn btn-info btn-sm me-2">
                    Edit
                  </button>
                  <button
                    className="btn btn-warning btn-sm" >
                    Delete
                  </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <div className='text-center' >
        <h5 class="text-center">Let's looks at the Map</h5>
        <Link to="https://gpsprojectggh.000webhostapp.com/" className='btn btn-success'>
        Track Student
      </Link>
      </div>
    </div>
  )
}

export default Home