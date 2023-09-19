import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home"



function App() {
  return (
    <div>
      <BrowserRouter>
      
  <Home/>
      <Routes>
        <Route path='/'/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
