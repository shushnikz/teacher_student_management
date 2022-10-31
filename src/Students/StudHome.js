import React, { useEffect, useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

function StudHome() {

  const navigate = useNavigate();

  const [students, setStudents] = useState([])

  useEffect(() => {
    getStudents()
  }, [])

  const getStudents = () => {
    fetch("https://635f784e3e8f65f283b3b428.mockapi.io/student")
      .then(data => data.json())
      .then((student) => setStudents(student.reverse()))
  }

  return (
    <div className="student">
      <div className="container">
        <div className="py-4">
          <h1 className="text-center text-dark">Students Data</h1>

          <table className="table table-light table-striped border shadow mt-4">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Student_Name</th>
                <th scope="col">Teacher_Name</th>
                <th scope="col">View</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                students.map((stud, index) => (
                  <tr>
                    <th scope='row'>{index + 1}</th>
                    <td>{stud.studentname}</td>
                    <td>{stud.teachername}</td>
                    <td>
                      <IconButton
                        onClick={() => {
                          navigate(`/student/${stud.id}`)
                        }}
                      >
                        <VisibilityIcon color="secondary" />
                      </IconButton>
                    </td>
                    <td>
                      <IconButton
                        onClick={() => {
                          navigate(`/student/edit/${stud.id}`)
                        }}>
                        <ModeEditIcon color="primary" />
                      </IconButton>
                    </td>
                    <td>
                      <IconButton
                        onClick={() => {
                          fetch(`https://635f784e3e8f65f283b3b428.mockapi.io/student/${stud.id}`, { method: "DELETE", })
                            .then(() => getStudents())

                        }}
                      >
                        <DeleteIcon color="error" />
                      </IconButton>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default StudHome