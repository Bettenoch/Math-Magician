import { Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import Quotes from './components/Quotes';
import Home from './components/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quotes" element={<Quotes />} />
      </Routes>

    </>

  );
}

export default App;
