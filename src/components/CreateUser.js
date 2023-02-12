import React, { useState } from 'react';
import axios from 'axios'

const CreateUser = () => {
  const [username, setUsername] = useState('')
  function onChangeUsername(e){
    setUsername(e.target.value)
  }

  function onSubmit(e){
    e.preventDefault()
    const newUser = {
      username: username
    }
    console.log(newUser)
    
    axios.post('http://localhost:5000/users/add', newUser)
    .then(res => console.log(res.data))
    .catch(err => console.log('Error: '+err))

    setUsername('')
  }
  return (
    <div className='container'>
      <br/>
      <h3 className='text-center'>Create New User</h3>
      <br/>
      <form onSubmit={onSubmit}>
      <div className='form-group'>
        <label>Username </label>
        <input type="text" className='form-control' onChange={onChangeUsername} required/>
      </div>
      <br/>
      <div className='form-group d-flex justify-content-center'>
            <input type="submit" value="Create User" className='btn btn-dark'/>
       </div>
      </form>
    </div>
  )
}

export default CreateUser