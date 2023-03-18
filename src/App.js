import './App.css';
import Body1 from './components/body1';
import Body3 from './components3/body3';
import {BrowserRouter, Route, Routes, Redirect } from 'react-router-dom';
import Body2 from './components2/body2'
function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Body1/>}/>
      <Route path="/body2" element={<Body2/>} />
      <Route path="/body3" element={<Body3/>} />
      </Routes>
    
    
     
      </BrowserRouter>
    </div>
  );
}

export default App;
