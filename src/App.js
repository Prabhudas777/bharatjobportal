import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Wfh from './components/WorkFromHome/Wfh';
import Itjob from './components/ITjobs/Itjob';
import Privacy from './components/Privacy/Privacy';
import Internship from './components/Internships/internship';
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Logo from './components/Logo/Logo'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <Logo/>
    <Navbar/>
    <div className="App">
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/internship' element={<Internship/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      <Route exact path='/it' element={<Itjob/>}/>
      <Route exact path='/wfh' element={<Wfh/>}/>
      <Route exact path='/privacy' element={<Privacy/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
