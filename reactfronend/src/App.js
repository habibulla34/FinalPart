import './App.css';
import { useState, useEffect } from "react";
import axios from "axios";
import React from 'react'

function App() {
  const [students, setStudents] = useState([])

  useEffect(() => {
    async function getAllStudent() {
      try {
        const students = await axios.get("http://127.0.0.1:8000/api/student/")
        console.log(students.data);
        setStudents(students.data)
      } catch (error) {
        console.log(error);
      }
    }
    getAllStudent();
  }, [])

  return (
    <div classNameName="App">
      <div className="top-nav">
        <div className="row">
          <div className="col-12">
            <h2>Django Backend and React FrontEnd</h2>
            <h6>Fetch data from django database and show it react FrontEnd </h6>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {
            students.map((student, i) => {
              return (
                <div className="col-4 mt-5">
                  <div className="img1 mt-5">
                  <div className="heading-name">
                    <h5>Name: {student.stuname}</h5>
                    <h5> Email: {student.email}</h5>
                  </div>
                     <img src={student.image} alt="" className="pro-img" />
                  </div>
                </div>
              )

            })
          }

        </div>
      </div>
    </div>
  );
}

export default App;
