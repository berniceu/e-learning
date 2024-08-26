import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import '../src/styles/home/home.css';
import Courses from './pages/coursesPage';
import { AppProvider } from "./context/Context";
import Admin from './pages/admin/Admin.jsx';

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/courses" element={<Courses />} />

          <Route path="/admin" element={<Admin />}>
            {/* <Route path="admin/???" element={< kk />} /> */}
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
