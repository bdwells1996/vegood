import './App.css'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Login from './components/Login';
import Home from './container/Home';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
} 

export default App
