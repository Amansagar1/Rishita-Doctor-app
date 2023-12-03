
import './App.css';
import Home from './Home/Home';
import Registerpage from './Loginpages/Registerpage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
   <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path='/' element={<Registerpage/>}/>
       <Route path='/home' element={<Home/>}/>
    
      </Routes>
    </div>
 
    </BrowserRouter>
  );
}

export default App;
