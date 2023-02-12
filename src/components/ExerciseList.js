import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const table1 = {
  "display": "block !important",
  "overflowX": "auto !important",
  "width": "100% !important"
}


const ExerciseList = () => {

// const [deleteExercise, setDeleteExercise] = useState('')
const [exerciseList, setExerciselist] = useState([])


useEffect(() => {
    
    axios({
      url: 'http://localhost:5000/exercises/',
      method: 'get'
    })
    .then(res =>  {
      setExerciselist(res.data)
      console.log("Exercises Retreived...", res.data)
  },(err=> console.log(err)))

}, [])

function deleteExercise(id){
  axios({
    url: 'http://localhost:5000/exercises/'+id,
    method: 'delete'
  })
  .then(res => {
    setExerciselist(exerciseList.filter(el => el._id !== id))
    console.log("Exercises Deleted ", res.data)
  }, (err => console.log(err)))
}


  return (
    <div className='container'>
    <div className='table-responsive w-100' style={{"overflowX": "auto"}}>
      <br/>
  <h3 className='text-center'>Logged Exercises</h3>
  <br/>
  <table className="table" style={table1}>
    <thead className="thead-dark">
      <tr>
        <th>Username</th>
        <th>Description</th>
        <th>Duration</th>
        <th>Date</th>
        <th className='text-center'>Actions</th>
      </tr>
    </thead>
      { 
        exerciseList.map((ex, index) => {
          return(
    <tbody>
        <tr>
          <td style={{"fontFamily": "sans-serif"}}>{ex.username}</td>
          <td style={{"fontFamily": "sans-serif"}}>{ex.description}</td>
          <td style={{"fontFamily": "sans-serif"}}>{ex.duration}</td>
          <td style={{"fontFamily": "sans-serif"}}>{ex.date}</td>
          <td className='text-center mt-0 pt-1'><button className='btn btn-dark pt-0' type="button" onClick={()=>deleteExercise(ex._id, index)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></button></td>

        </tr>
    </tbody>         
          )
        })
      }
  </table>
</div>
</div>
  )
}

export default ExerciseList