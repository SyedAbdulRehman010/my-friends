import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Signup} from './Signup'
import {Login} from './login'
import {Home} from './home'


function App() {
  return (
   <>
   <Routes>
<Route path="/" element={<Signup/>}/>
<Route path="/signin" element={<Login/>}/>
<Route path="/Home" element={<Home/>}/>



   </Routes>
   
   
   </>  
  );
}

export default App;
