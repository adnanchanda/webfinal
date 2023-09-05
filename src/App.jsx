import Header from './main.jsx/Header';
import './App.css';
import Herosec from './main.jsx/Herosec.jsx';
import NavBar from './main.jsx/NavBar';
import AboutMe from './main.jsx/Pages/AboutMe';
import { Route,Routes } from 'react-router-dom';
import Myprojects from './main.jsx/Pages/Myprojects';
import Contact from './main.jsx/Pages/Contact';
import Home from './main.jsx/Pages/Home';
import DemoAPI from './main.jsx/Pages/DemoAPI';



function App() {
  return (
    <div>
      <Header/>
      <NavBar/>
  
      <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/about" element ={<AboutMe/>} />
        <Route path="/myprojects" element={<Myprojects/>}/>
        <Route path="/contacts" element={<Contact/>}/>
        <Route path="/api" element={<DemoAPI/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
