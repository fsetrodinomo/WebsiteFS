import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aboutme from "./pages/Aboutme";
import Book from "./pages/Book";
import Code from "./pages/Code";
import Tools from "./pages/Tools";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/aboutme' element={<Aboutme/>}></Route>
        <Route path='/code' element={<Code/>}></Route>
        <Route path='/book' element={<Book/>}></Route>
        <Route path='/tools' element={<Tools/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
