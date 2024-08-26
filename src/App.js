import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import '../src/styles/home/home.css';
import { AppProvider } from "./context/Context";
import Admin from './pages/admin/Admin.jsx';
import Register from './Components/Register';
import Login from './Components/Login';
import LiveCourse from './Components/LiveCourse';
import LiveDetails from './Components/LiveDetails'
import CourseListWithPagination from './Components/CourseListWithPagination';

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/courses" element={<CourseListWithPagination />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/liveDetails" element={<LiveDetails />} />
          <Route path="/liveCourse" element={<LiveCourse />} />
          <Route path="/admin" element={<Admin />}>
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;


