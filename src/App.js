import './App.css';
import Navbar from './Navbar';
import SideBar from './Sidebar';
import { Routes, Route } from "react-router-dom";
import TeachHome from './Teachers/TeachHome';
import StudHome from './Students/StudHome';
import Home from './Home';
import Addstudent from './Students/Addstudent';
import Addteacher from './Teachers/Addteacher';
import Editstudent from './Students/Editstudent';
import Editteacher from './Teachers/Editteacher';
import Viewstudent from './Students/Viewstudent';
import Viewteacher from './Teachers/Viewteacher';

function App() {
  return (
    <div className="App">
      <SideBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<StudHome />} />
        <Route path="/teacher" element={<TeachHome />} />
        <Route path="/student/add" element={<Addstudent />} />
        <Route path="/teacher/add" element={<Addteacher />} />
        <Route path="/student/edit/:id" element={<Editstudent />} />
        <Route path="/teacher/edit/:id" element={<Editteacher />} />
        <Route path="/student/:id" element={<Viewstudent />} />
        <Route path="/teacher/:id" element={<Viewteacher />} />
      </Routes>
    </div>
  );
}

export default App;
