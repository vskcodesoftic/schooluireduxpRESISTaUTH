import { Link } from 'react-router-dom';
import React from 'react'
import StudentData from '../../DataTables/ViewData/StudentData';

const StudentViewDataPage = () => {
    return (
        <div>
            <Link to="/superadmin/roles/add">
            <button className="p-5 text-white bg-green-400 m-5 px-4 py-1 rounded-2xl hover:bg-green-500 ">Add Student</button>
            </Link>
            <StudentData />
        </div>
    )
}

export default StudentViewDataPage
