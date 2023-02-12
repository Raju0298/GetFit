import React, { useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';


const CreateExercise = () => {
  const [username, setUsername] = useState('')
  const [description, setDescription] = useState('')
  const [duration, setDuration] = useState(0)
  const [date1, setDate1] = useState(new Date())

  

  const [users, setUsers] = useState([])


  useEffect(() => {

      axios({
        url: 'http://localhost:5000/users/',
        method: 'get'
      })
      .then(res =>  {
          setUsers(res.data.map(user=>user.username))
          setUsername(res.data[0].username)
          console.log("Users Retreived...", res.data)
      },(err=> console.log(err)))
  }, [])

  


  function onChangeUsername(e) {
    let uname = e.target.value;
    setUsername(uname)
  }

  function onChangeDescription(e) {
    let desc = e.target.value;
    setDescription(desc)
  }

  function onChangeDuration(e) {
    let dur = e.target.value;
    setDuration(dur)
  }

  // function onChangeDate(date1) {
  //   setDate(date1)
  // }

  function onSubmit(e) {
    e.preventDefault()
    const newExercise = {
      username: username,
      description: description,
      duration: duration,
      date: date1
    }

    console.log(newExercise)
    axios.post('http://localhost:5000/exercises/add', newExercise)
    .then(res => console.log(res.data))
    .catch(err => console.log('Error: '+err))

   
    

    // window.location = "/"
  }
  return (
    <div className='container'>
      <br/>
      <h3 className='text-center'>Create New Exercise Log</h3><br/>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label>Username </label>
          <select className='form-control' onChange={onChangeUsername}>
            {
              users.map((user, index) => {
                return(
                  <option key={index} value={user}>{user}</option>
                )                
              }
              )
            }
          </select>
        </div>
       <div className='form-group'>
        <label>Description </label>
        <input type="text" className='form-control' onChange={onChangeDescription} required/>
       </div>

       <div className='form-group'>
        <label>Duration (In Minutes) </label>
        <input type="text" className='form-control' onChange={onChangeDuration} required/>
       </div>

       <div className='form-group'>
        <label>Date </label>
        <div>
            <ReactDatePicker
            selected={date1}
            onChange={(date1) => setDate1(date1)}
            dropdownMode="select"
            showMonthDropdown
            showYearDropdown
            adjustDateOnChange
            />
        </div>
       </div>
            <br/>
       <div className='form-group d-flex justify-content-center'>
            <input type="submit" value="Create Exercise Log" className='btn btn-dark'/>
       </div>

      </form>
    </div>
  )
}

export default CreateExercise