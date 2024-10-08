import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import '../src/styles/home/home.css';
import { AppProvider } from "./context/Context";
import Admin from './pages/admin/Admin.jsx';
import Register from './Components/Register';
import Login from './Components/Login';
import LiveCourse from './Components/LiveCourse';
import LiveDetails from './Components/LiveDetails';
import OtpVerification from './Components/OtpVerification.jsx';
import CourseListWithPagination from './Components/CourseListWithPagination';
import ResetPassword from './Components/ResetPassword.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
          <Route path="/otp-verification" element={<OtpVerification />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/admin" element={<Admin />}>
          
          </Route>
        </Routes>
      </Router>
      <ToastContainer position="top-right" autoClose={5000} />
    </AppProvider>
  );
}

export default App;


