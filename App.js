import logo from './logo.svg';
import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <>
    <div className="container">
    <Router>
    <Routes>
    <Route exact path="/" element={<Create/>}></Route>
    <Route exact path="/read" element={<Read/>}></Route>
    <Route exact path="/update" element={<Update/>}></Route>
    </Routes>
    </Router>
    {/*<Create/>
    <Read/>*/}
    </div>
    </>
  );
}

export default App;
