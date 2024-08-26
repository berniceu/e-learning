import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import '../src/styles/home/home.css';

function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
        </Routes>
      </Router>
    
    </>
  );
}

export default App;
