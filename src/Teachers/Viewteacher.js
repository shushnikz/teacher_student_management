import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function Viewteacher() {
    const { id } = useParams()

    const navigate = useNavigate()

    const [teacher, setTeacher] = useState({})

    useEffect(() => {
        fetch(`https://635f8fddca0fe3c21a9ed89e.mockapi.io/teacher/${id}`, { method: "GET", })
            .then(data => data.json())
            .then((teach) => setTeacher(teach))
    }, [id])

    return (
        <div className="editstudent">
            <div className="container py-4">

                <h1 className="display-4 text-white">Teacher Id : {id}</h1>
                <hr />
                <ul className="list-group w-100 py-4">
                    <li className="list-group-item bg-light py-3">Teacher Name : {teacher.teachername}</li>
                    <li className="list-group-item bg-light py-3">Qualification : {teacher.Qualification}</li>
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