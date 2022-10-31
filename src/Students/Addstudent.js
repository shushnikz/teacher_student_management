import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const userValidationSchema = yup.object({
  studentname: yup
    .string()
    .required("Why not fill the studentname?"),
  teachername: yup
    .string()
    .required("why not fill the teachername?"),
})

export default function Addstudent() {

  const formik = useFormik({
    initialValues: { studentname: "", teachername: "" },
    validationSchema: userValidationSchema,
    onSubmit: (newStudent) => {
      //  console.log("onSubmit",values);
      createStudent(newStudent)
    }
  })

  const createStudent = (newStudent) => {

    console.log("createStudent", newStudent)
    fetch("https://635f784e3e8f65f283b3b428.mockapi.io/student", {
      method: "POST",
      body: JSON.stringify(newStudent),
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((data) => data.json())
      .then(() => navigate("/student"));

  }

  const navigate = useNavigate()

  return (
    <div className="addstudent">
      <div className="container mt-5">
        <div className="w-100 mx-auto shadow p-5">
          <h2 className="text-center text-white mb-4">Add A Student</h2>
          <form onSubmit={formik.handleSubmit}>
            <input
              className="form-control form-control-lg"
              id="studentname"
              name="studentname"
              type="text"
              value={formik.values.studentname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter Student name"
              aria-label=".form-control-lg example" />


            {formik.touched.studentname && formik.errors.studentname ? formik.errors.studentname : ''}
            <br></br>

            <input
              className="form-control form-control-lg"
              id="teachername"
              name="teachername"
              type="text"
              value={formik.values.teachername}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter Teacher name"
              aria-label=".form-control-lg example" />
            {formik.touched.teachername && formik.errors.teachername ? formik.errors.teachername : ''}
            <br></br>

            <div className="d-grid gap-2 col-6 mx-auto">
              <button onClick={createStudent} className="btn btn-success mt-5" type="submit">Add Student</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}