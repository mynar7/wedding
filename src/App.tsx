import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/home'
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
