import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/home'
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <footer>
        Made with love by Lee because Kenna told me to.
      </footer>
    </>
  );
}

export default App;
