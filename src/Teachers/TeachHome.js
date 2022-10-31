import React, { useEffect, useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

function TeachHome() {

  const navigate = useNavigate();

  const [teachers, setTeachers] = useState([])

  useEffect(() => {
    getTeachers()
  }, [])

  const getTeachers = () => {
    fetch("https://635f8fddca0fe3c21a9ed89e.mockapi.io/teacher")
      .then(data => data.json())
      .then((teacher) => setTeachers(teacher.reverse()))
  }

  return (
    <div className="teacher">
      <div className="container">
        <div className="py-4">
          <h1 className="text-center text-dark">Teachers Data</h1>

          <table className="table table-light table-striped border shadow mt-4">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Teacher_Name</th>
                <th scope="col">Qualification</th>
                <th scope="col">View</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                teachers.map((teach, index) => (
                  <tr>
                    <th scope='row'>{index + 1}</th>
                    <td>{teach.teachername}</td>
                    <td>{teach.Qualification}</td>
                    <td>
                      <IconButton
                        onClick={() => {
                          navigate(`/teacher/${teach.id}`)
                        }}
                      >
                        <VisibilityIcon color="secondary" />
                      </IconButton>
                    </td>
                    <td>
                      <IconButton
                        onClick={() => {
                          navigate(`/teacher/edit/${teach.id}`)
                        }}>
                        <ModeEditIcon color="primary" />
                      </IconButton>
                    </td>
                    <td>
                      <IconButton
                        onClick={() => {
                          fetch(`https://635f8fddca0fe3c21a9ed89e.mockapi.io/teacher/${teach.id}`, { method: "DELETE", })
                            .then(() => getTeachers())

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

export default TeachHome