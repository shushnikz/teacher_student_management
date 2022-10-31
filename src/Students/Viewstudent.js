import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function Viewstudent() {
  const { id } = useParams()

  const navigate = useNavigate()

  const [student, setStudent] = useState({})

  useEffect(() => {
    fetch(`https://635f784e3e8f65f283b3b428.mockapi.io/student/${id}`, { method: "GET", })
      .then(data => data.json())
      .then((stud) => setStudent(stud))
  }, [id])

  return (
    <div className="editstudent">
      <div className="container py-4">

        <h1 className="display-4 text-white">Student Id : {id}</h1>
        <hr />
        <ul className="list-group w-100 py-4">
          <li className="list-group-item bg-light py-3">Student Name : {student.studentname}</li>
          <li className="list-group-item bg-light py-3">Teacher Name : {student.teachername}</li>
        </ul>
        <button
          onClick={() => navigate(-1)}
          className="btn btn-primary mt-3" >
          <ArrowBackIosIcon />Back
        </button>
      </div>
    </div>

  )
}