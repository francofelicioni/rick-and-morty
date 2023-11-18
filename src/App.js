import './App.css';
import Home from './pages/Home';
import Episodes from './pages/Episodes';
import Locations from './pages/Locations';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/episodes' element={<Episodes />} />
          <Route path='/locations' element={<Locations />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
