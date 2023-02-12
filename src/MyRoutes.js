import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Navbar from './components/Navbar'
import CreateExercise from './components/CreateExercise'
import ExerciseList from './components/ExerciseList'
import CreateUser from './components/CreateUser'
import EditExercise from './components/EditExercise'


function MyRoutes(){
    return(
        <Router>
            <Navbar/>
            <Routes>
            
                
                <Route exact path='/' element={<ExerciseList/>} />
                <Route exact path='/edit/:id' element={<EditExercise/>} />
                <Route exact path='/create' element={<CreateExercise/>} />
                <Route exact path='/user' element={<CreateUser/>} />

            </Routes>
        </Router>

    )
}

export default MyRoutes;