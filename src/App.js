import './App.css';
import Home from './pages/Home';
import Episodes from './pages/Episodes';
import Locations from './pages/Locations';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import CardDetails from './components/Cards/CardDetails';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<CardDetails />} />
          <Route path='/episodes' element={<Episodes />} />
          <Route path='/episodes/:id' element={<CardDetails />} />
          <Route path='/locations' element={<Locations />} />
          <Route path='/locations/:id' element={<CardDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
