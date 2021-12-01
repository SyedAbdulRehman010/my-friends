import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Signup} from './Signup'
import {Login} from './login'
function App() {
  return (
   <>
   <Routes>
<Route path="/" element={<Signup/>}/>
<Route path="/signin" element={<Login/>}/>



   </Routes>
   
   
   </>  
  );
}

export default App;
