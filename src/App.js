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
