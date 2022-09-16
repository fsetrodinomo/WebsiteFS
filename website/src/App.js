import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Code from "./pages/Code";
import Project from "./pages/Project";
import Aboutme from './pages/Aboutme';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/aboutme' element={<Aboutme/>}></Route>
        <Route path='/project' element={<Project/>}></Route>
        <Route path='/code' element={<Code/>}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
