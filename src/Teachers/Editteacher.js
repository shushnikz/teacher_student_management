import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Editteacher() {

  const { id } = useParams()

  const [teacher, setTeacher] = useState(null)
  useEffect(() => {
    fetch(`https://635f8fddca0fe3c21a9ed89e.mockapi.io/teacher/${id}`, { method: "GET", })
      .then(data => data.json())
      .then((teach) => setTeacher(teach))
  }, [])


  return (
    teacher ? <EditTeacherForm teacher={teacher} /> : "Loading.."
  )
}


function EditTeacherForm({ teacher }) {

  const [teachername, setTeacherName] = useState(teacher.teachername)
  const [Qualification, setQualification] = useState(teacher.Qualification)

  const navigate = useNavigate()

  return (
    <div className="editstudent">
      <div className="container mt-5">
        <div className="w-100 mx-auto shadow p-5">
          <h2 className="text-center text-white mb-4">Edit Teacher</h2>
          <input
            className="form-control form-control-lg mt-3"
            value={teachername}
            onChange={(event) => setTeacherName(event.target.value)}
            type="text"
            placeholder="edit teacher name"
            aria-label=".form-control-lg example" />
          <input
            className="form-control form-control-lg mt-3"
            value={Qualification}
            onChange={(event) => setQualification(event.target.value)}
            type="text"
            placeholder="edit qualification"
            aria-label=".form-control-lg example" />
          <div className="d-grid gap-2 col-6 mx-auto">
            <button
              onClick={() => {
                const updatedTeacher = {
                  teachername: teachername,
                  Qualification: Qualification,
                }
                fetch(`https://635f8fddca0fe3c21a9ed89e.mockapi.io/teacher/${teacher.id}`,
                  {
                    method: "PUT",
                    body: JSON.stringify(updatedTeacher),
                    headers: {
                      "Content-Type": "application/json",
                    }
                  })
                  .then(data => data.json())
                  .then(() => navigate("/teacher"))
              }
              }
              className="btn btn-info mt-3" type="submit">Save Teacher</button>
          </div>
        </div>
      </div>
    </div>
  )
}

