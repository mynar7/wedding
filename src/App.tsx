import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/home'
import Groomsmen from './pages/groomsmen'
import Qr from './pages/qr'
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/groomsmen" element={<Groomsmen />} />
        <Route path="/qr" element={<Qr />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
