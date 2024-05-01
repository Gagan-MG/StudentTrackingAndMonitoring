// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const EnterMarks = () => {
//   const { id } = useParams()
//   const [marks, setMarks] = useState({
//     subject1: '',
//     subject2: '',
//     subject3: '',
//     subject4: '',
//     subject5: ''
//   });
//   // const [totalMarks, setTotalMarks] = useState(0); // Add totalMarks to state
//   // const [totalPercentage, setTotalPercentage] = useState(0);
//   // const [grade, setGrade] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // // Calculate total marks
//     // const totalMarksValue = Object.values(marks).reduce((acc, curr) => acc + parseInt(curr), 0);
  
//     // // Calculate total percentage
//     // const totalPercentage = (totalMarksValue / (Object.keys(marks).length * 100)) * 100;
  
//     // // Calculate grade
//     // let grade;
//     // if (totalPercentage >= 90) {
//     //   grade = 'S';
//     // } else if (totalPercentage >= 80) {
//     //   grade = 'A';
//     // } else if (totalPercentage >= 70) {
//     //   grade = 'B';
//     // } else if (totalPercentage >= 60) {
//     //   grade = 'C';
//     // } else if (totalPercentage >= 50) {
//     //   grade = 'D';
//     // } else if (totalPercentage >= 40) {
//     //   grade = 'E';
//     // } else {
//     //   grade = 'F';
//     // }
  
//     // // Combine student data with calculated marks, percentage, and grade
//     // const studentData = {
//     //   totalMarks: totalMarksValue, // Use totalMarksValue instead of totalMarks
//     //   totalPercentage: totalPercentage.toFixed(2),
//     //   grade: grade
//     // };
  
    
//     // Send student data to the server
//     axios.post('http://localhost:3000/auth/enter_marks/'+id, studentData)
//       .then(result => {
//         if (result.data.Status) {
//           navigate('/dashboard/student');
//         } else {
//           alert(result.data.Error);
//         }
//       })
//       .catch(err => console.log(err));
//   };  

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     const newMarks = { ...marks, [name]: value };
//     setMarks(newMarks);
//     calculateTotalPercentage(newMarks);
//   };

//   // const calculateTotalPercentage = (newMarks) => {
//   //   const totalMarksValue = Object.values(newMarks).reduce((acc, curr) => acc + parseInt(curr), 0);
//   //   setTotalMarks(totalMarksValue); // Update totalMarks state variable
//   //   const totalPercentageValue = (totalMarksValue / (Object.keys(newMarks).length * 100)) * 100;
//   //   setTotalPercentage(totalPercentageValue.toFixed(2));
//   //   calculateGrade(totalPercentageValue);
//   // };

//   // const calculateGrade = (totalPercentageValue) => {
//   //   if (totalPercentageValue >= 90) {
//   //     setGrade('S');
//   //   } else if (totalPercentageValue >= 80) {
//   //     setGrade('A');
//   //   } else if (totalPercentageValue >= 70) {
//   //     setGrade('B');
//   //   } else if (totalPercentageValue >= 60) {
//   //     setGrade('C');
//   //   } else if (totalPercentageValue >= 50) {
//   //     setGrade('D');
//   //   } else if (totalPercentageValue >= 40) {
//   //     setGrade('E');
//   //   } else {
//   //     setGrade('F');
//   //   }
//   // };

//   return (
//     <div className="d-flex justify-content-center align-items-center mt-3">
//       <div className="p-3 rounded w-50 border">
//         <h3 className="text-center">Enter Marks</h3>
//         <form onSubmit={handleSubmit}>
//           <table className="table">
//             <thead>
//               <tr>
//                 <th>Subject</th>
//                 <th>Marks</th>
//               </tr>
//             </thead>
//             <tbody>
//               {Object.keys(marks).map((subject, index) => (
//                 <tr key={index}>
//                   <td>{subject}</td>
//                   <td>
//                     <input type="number" name={subject} className="form-control" value={marks[subject]} onChange={handleInputChange} />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <div className="text-center">
//             {/* <p>Total Marks: {totalMarks}</p>
//             <p>Total Percentage: {totalPercentage}%</p>
//             <p>Grade: {grade}</p> */}
//             <button type="submit" className="btn btn-primary">
//               Save Marks
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EnterMarks;


import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EnterMarks = () => {
  const { id } = useParams();
  const [marks, setMarks] = useState({
    subject1: '',
    subject2: '',
    subject3: '',
    subject4: '',
    subject5: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
      formData.append('subject1', marks.subject1);
      formData.append('subject2', marks.subject2);
      formData.append('subject3', marks.subject3);
      formData.append('subject4', marks.subject4);
      formData.append('subject5', marks.subject5);

    // Send student data to the server
    axios.post("http://localhost:3000/auth/enter_marks/"+id, formData)
      .then(result => {
        if (result.data.Status) {
          navigate('/dashboard/student');
        } else {
          alert(result.data.Error);
        }
      })
      .catch(err => console.log(err));
  };  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMarks(prevMarks => ({
      ...prevMarks,
      [name]: value
    }));
  };

  return (
    // <div className="d-flex justify-content-center align-items-center mt-3">
    //   <div className="p-3 rounded w-50 border">
    //     <h3 className="text-center">Enter Marks</h3>
    //     <form onSubmit={handleSubmit}>
    //       <table className="table">
    //         <thead>
    //           <tr>
    //             <th>Subject</th>
    //             <th>Marks</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           {Object.keys(marks).map((subject, index) => (
    //             <tr key={index}>
    //               <td>{subject}</td>
    //               <td>
    //                 <input type="number" name={subject} className="form-control" value={marks[subject]} onChange={handleInputChange} />
    //               </td>
    //             </tr>
    //           ))}
    //         </tbody>
    //       </table>
    //       <div className="text-center">
    //         <button type="submit" className="btn btn-primary">
    //           Save Marks
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Enter Marks</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label for="inputName" className="form-label">
              Subject_1
            </label>
            <input
              type="number"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter Marks"
              onChange={(e) =>
                setMarks({ ...marks, Subject_1: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="inputName" className="form-label">
              Subject_2
            </label>
            <input
              type="number"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter Marks"
              onChange={(e) =>
                setMarks({ ...marks, Subject_2: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="inputName" className="form-label">
              Subject_3
            </label>
            <input
              type="number"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter Marks"
              onChange={(e) =>
                setMarks({ ...marks, Subject_3: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="inputName" className="form-label">
              Subject_4
            </label>
            <input
              type="number"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter Marks"
              onChange={(e) =>
                setMarks({ ...marks, Subject_4: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="inputName" className="form-label">
              Subject_5
            </label>
            <input
              type="number"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter Marks"
              onChange={(e) =>
                setMarks({ ...marks, Subject_5: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Add Marks
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnterMarks;
