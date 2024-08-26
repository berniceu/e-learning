import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import '../src/styles/home/home.css';
import Courses from './pages/coursesPage';

function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/courses" element={<Courses />} />
        </Routes>
      </Router>
    
    </>
  );
}

export default App;
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import LiveCourse from './components/LiveCourse';
import LiveDetails from './components/LiveDetails'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/liveDetails" element={<LiveDetails />} />
          <Route path="/liveCourse" element={<LiveCourse />} />
          <Route path="/" element={<Login />} /> 
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
