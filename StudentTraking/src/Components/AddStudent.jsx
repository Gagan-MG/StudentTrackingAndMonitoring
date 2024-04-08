import React from 'react'

const AddStudent = () => {
  return (
    <div className='d-flex justify-content-center align-items-center h-75'>
        <div className='p-3 rounded w-30 border'>
            <h2>Add Student</h2>
            <form>
                <div className='mb-3'>
                    <label htmlFor='category'> <strong>Student:</strong></label>
                    <input type='text' name='category' placeholder='Enter Category' 
                      onChange={(e) => setCategory(e.target.value)} className='form-control rounded-0'></input>
                </div>
                <button className='btn btn-success w-100 rounded-0 mb-2'>Add Student</button>
            </form>
        </div>
    </div>
  )
}

export default AddStudent