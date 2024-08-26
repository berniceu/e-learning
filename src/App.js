import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import '../src/styles/home/home.css';
import Courses from './pages/coursesPage';
import Register from './components/Register';
import Login from './components/Login';
import LiveCourse from './components/LiveCourse';
import LiveDetails from './components/LiveDetails'
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


