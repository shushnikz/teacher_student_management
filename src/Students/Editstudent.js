import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Editstudent() {

  const { id } = useParams()

  const [student, setStudent] = useState(null)
  useEffect(() => {
    fetch(`https://635f784e3e8f65f283b3b428.mockapi.io/student/${id}`, { method: "GET", })
      .then(data => data.json())
      .then((stud) => setStudent(stud))
  }, [])


  return (
    student ? <EditStudentForm student={student} /> : "Loading.."
  )
}


function EditStudentForm({ student }) {

  const [studentname, setStudentName] = useState(student.studentname)
  const [teachername, setTeacherName] = useState(student.teachername)

  const navigate = useNavigate()

  return (
    <div className="editstudent">
      <div className="container mt-5">
        <div className="w-100 mx-auto shadow p-5">
          <h2 className="text-center text-white mb-4">Edit Student</h2>
          <input
            className="form-control form-control-lg mt-3"
            value={studentname}
            onChange={(event) => setStudentName(event.target.value)}
            type="text"
            placeholder="edit student name"
            aria-label=".form-control-lg example" />
          <input
            className="form-control form-control-lg mt-3"
            value={teachername}
            onChange={(event) => setTeacherName(event.target.value)}
            type="text"
            placeholder="edit teacher name"
            aria-label=".form-control-lg example" />
          <div className="d-grid gap-2 col-6 mx-auto">
            <button
              onClick={() => {
                const updatedStudent = {
                  studentname: studentname,
                  teachername: teachername,
                }
                fetch(`https://635f784e3e8f65f283b3b428.mockapi.io/student/${student.id}`,
                  {
                    method: "PUT",
                    body: JSON.stringify(updatedStudent),
                    headers: {
                      "Content-Type": "application/json",
                    }
                  })
                  .then(data => data.json())
                  .then(() => navigate("/student"))
              }
              }
              className="btn btn-info mt-3" type="submit">Save Student</button>
          </div>
        </div>
      </div>
    </div>
  )
}

