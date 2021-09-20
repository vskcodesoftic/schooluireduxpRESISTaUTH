import React from 'react';
import { useIntl } from 'react-intl';
import Switch from 'react-switch';
import { FaHeart, FaBars } from 'react-icons/fa';
import reactLogo from './assets/logo.svg';
import { Redirect, Route } from 'react-router';

import AdminDashboard from './components/Admin/sections/AdminDashboard'

import SuperAdminDashboard from './components/superAdmin/sections/SuperAdminDashboard'
import FacultyAttendence from './components/superAdmin/pages/Attendence/FacultyAttendence';
import StudentAttendence from './components/superAdmin/pages/Attendence/StudentAttendence';
import NonPermanentAttendence from './components/superAdmin/pages/Attendence/NonPermanentAttendence';
import AdminsAttendence from './components/superAdmin/pages/Attendence/AdminsAttendence';
import LibrainAttendencePage from './components/superAdmin/pages/Attendence/LibrainAttendencePage';
import AccountantAttendencePage from './components/superAdmin/pages/Attendence/AccountantAttendencePage';
import ClerkAttendencePage from './components/superAdmin/pages/Attendence/ClerkAttendencePage';
import AdminViewDataPage from './components/superAdmin/pages/ViewData/AdminViewDataPage';
import AddUserRolesPage from './components/superAdmin/pages/AddUserRole/AddUserRole';
import AccountantViewDataPage from './components/superAdmin/pages/ViewData/AccountantViewDataPage';
import ClerkViewDataPage from './components/superAdmin/pages/ViewData/ClerkViewDataPage';
import LibrarianViewDataPage from './components/superAdmin/pages/ViewData/LibrarianViewDataPage';
import StudentViewDataPage from './components/superAdmin/pages/ViewData/StudentViewDataPage';
import TeacherViewDataPage from './components/superAdmin/pages/ViewData/TeacherViewDataPage';
import NonTeacherViewDataPage from './components/superAdmin/pages/ViewData/NonTeacherViewDataPage';
import AnnouncementViewDataPage from './components/superAdmin/pages/ViewData/AnnouncementViewDataPage';
import TeacherDashboard from './components/Teacher/sections/TeacherDashboard';
import StudentDashboard from './components/students/StudentDashboard';

const Main = ({
  collapsed,
  rtl,
  image,
  handleToggleSidebar,
  handleCollapsedChange,
  handleRtlChange,
  handleImageChange,
}) => {
  const intl = useIntl();
  return (
    <main>
      <div className="bg-green-500 p-5">

      </div>
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>
     
     <Route exact path="/admin/dashboard" >
       <AdminDashboard />
     </Route>

     <Route exact path="/superadmin/dashboard" >
       <SuperAdminDashboard />
     </Route>

     <Route exact path="/superadmin/attendence/teacher" >
       <FacultyAttendence />
     </Route>
     <Route exact path="/superadmin/attendence/admin" >
       <AdminsAttendence />
     </Route>

     <Route exact path="/superadmin/attendence/temporary-teacher" >
       <NonPermanentAttendence />
     </Route>

     <Route exact path="/superadmin/attendence/student" >
       <StudentAttendence />
     </Route>

     <Route exact path="/superadmin/attendence/librarian" >
       <LibrainAttendencePage />
     </Route>
     <Route exact path="/superadmin/attendence/accountant" >
       <AccountantAttendencePage />
     </Route>
     <Route exact path="/superadmin/attendence/clerk" >
       <ClerkAttendencePage />
     </Route>

    <Route exact path="/superadmin/data/admin/view">
      <AdminViewDataPage />
    </Route>
   
    <Route exact path="/superadmin/roles/add">
      <AddUserRolesPage />
    </Route>

    <Route exact path="/superadmin/data/accountant/view">
      <AccountantViewDataPage />
    </Route>

    <Route exact path="/superadmin/data/clerk/view">
      <ClerkViewDataPage />
    </Route>

    <Route exact path="/superadmin/data/librarian/view">
      <LibrarianViewDataPage />
    </Route>

    <Route exact path="/superadmin/data/students/view">
      <StudentViewDataPage />
    </Route>

    <Route exact path="/superadmin/data/teachers/view">
      <TeacherViewDataPage />
    </Route>

    <Route exact path="/superadmin/data/non-teachers/view">
      <NonTeacherViewDataPage />
    </Route>
   
    <Route exact path="/superadmin/data/announcements/view">
      <AnnouncementViewDataPage />
    </Route>

    <Route exact path="/teacher/dashboard">
      <TeacherDashboard />
    </Route>

    <Route exact path="/student/dashboard">
      <StudentDashboard />
    </Route>


     <Route exact path="/">   
     <Redirect to="/superadmin/dashboard" />
     </Route>    
  </main>
  );
};

export default Main;
