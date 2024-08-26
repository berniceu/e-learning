import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from '../src/pages/Homepage';
import '../src/styles/home/home.css';
import Courses from './pages/coursesPage';
import Register from './Components/Register';
import Login from './Components/Login';
import LiveCourse from './Components/LiveCourse';
import LiveDetails from './Components/LiveDetails'
import CourseListWithPagination from './Components/CourseListWithPagination';

function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/courses" element={<CourseListWithPagination />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/liveDetails" element={<LiveDetails />} />
          <Route path="/liveCourse" element={<LiveCourse />} />
        </Routes>
      </Router>
    
    </>
  );
}

export default App;


