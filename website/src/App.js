import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Project from "./pages/Project";
import Aboutme from './pages/Aboutme';
import Designs from './pages/Designs';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/aboutme' element={<Aboutme/>}></Route>
        <Route path='/project' element={<Project/>}></Route>
        <Route path='/designs' element={<Designs/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
