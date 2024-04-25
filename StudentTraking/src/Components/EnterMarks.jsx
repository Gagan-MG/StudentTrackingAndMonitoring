import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';

const EnterMarks = () => {
  const [marks, setMarks] = useState({
    subject1: '',
    subject2: '',
    subject3: '',
    subject4: '',
    subject5: ''
  });

  const { id } = useParams(); // Assuming you're passing the student ID in the URL params
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const marksData = {
      studentId: id,
      marks: marks
    };

    axios.post('http://localhost:3000/auth/enter_marks', marksData)
      .then(result => {
        if (result.data.Status) {
          navigate('/dashboard/student'); // Redirect to student list after saving marks
        } else {
          alert(result.data.Error);
        }
      })
      .catch(err => console.log(err));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMarks(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Enter Marks</h3>
        <form onSubmit={handleSubmit}>
          <table className="table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Marks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Subject 1</td>
                <td>
                  <input type="number" name="subject1" className="form-control" value={marks.subject1} onChange={handleInputChange} />
                </td>
              </tr>
              <tr>
                <td>Subject 2</td>
                <td>
                  <input type="number" name="subject2" className="form-control" value={marks.subject2} onChange={handleInputChange} />
                </td>
              </tr>
              <tr>
                <td>Subject 3</td>
                <td>
                  <input type="number" name="subject3" className="form-control" value={marks.subject3} onChange={handleInputChange} />
                </td>
              </tr>
              <tr>
                <td>Subject 4</td>
                <td>
                  <input type="number" name="subject4" className="form-control" value={marks.subject4} onChange={handleInputChange} />
                </td>
              </tr>
              <tr>
                <td>Subject 5</td>
                <td>
                  <input type="number" name="subject5" className="form-control" value={marks.subject5} onChange={handleInputChange} />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Save Marks
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnterMarks;
