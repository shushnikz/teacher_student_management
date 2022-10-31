import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const userValidationSchema = yup.object({
  teachername: yup
    .string()
    .required("Why not fill the teachername?"),
  Qualification: yup
    .string()
    .required("why not fill the qualification?"),
})

export default function Addteacher() {

  const formik = useFormik({
    initialValues: { teachername: "", Qualification: "" },
    validationSchema: userValidationSchema,
    onSubmit: (newTeacher) => {
      //  console.log("onSubmit",values);
      createTeacher(newTeacher)
    }
  })

  const createTeacher = (newTeacher) => {

    console.log("createTeacher", newTeacher)
    fetch("https://635f8fddca0fe3c21a9ed89e.mockapi.io/teacher", {
      method: "POST",
      body: JSON.stringify(newTeacher),
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((data) => data.json())
      .then(() => navigate("/teacher"));

  }

  const navigate = useNavigate()


  return (
    <div className="addteacher">
      <div className="container mt-5">
        <div className="w-100 mx-auto shadow p-5">
          <h2 className="text-center text-white mb-4">Add Teacher</h2>
          <form onSubmit={formik.handleSubmit}>

            <input
              className="form-control form-control-lg"
              id="teachername"
              teachername="teachername"
              type="text"
              value={formik.values.teachername}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter Teacher name"
              aria-label=".form-control-lg example" />
            {formik.touched.teachername && formik.errors.teachername ? formik.errors.teachername : ''}
            <br></br>

            <input
              className="form-control form-control-lg"
              id="Qualification"
              Qualification="Qualification"
              type="text"
              value={formik.values.Qualification}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter Qualification"
              aria-label=".form-control-lg example" />
            {formik.touched.Qualification && formik.errors.Qualification ? formik.errors.Qualification : ''}
            <br></br>


            <div className="d-grid gap-2 col-6 mx-auto">
              <button onClick={createTeacher} className="btn btn-success mt-5" type="submit">Add Teacher</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}