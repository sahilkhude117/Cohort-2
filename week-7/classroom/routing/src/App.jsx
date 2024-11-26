import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom';
import './App.css'
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import("./components/Dashboard"));
const Landing = lazy(() => import("./components/Landing"));

function App(){
  
  //suspence api
  return (
    <div>
      <BrowserRouter>
        <AppBar/>
        <Routes>
          <Route path='/dashboard' element={<Suspense fallback={"loading.."}><Dashboard/></Suspense>}/>
          <Route path='/' element={ <Suspense fallback={"..loading"}><Landing/></Suspense>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}

function AppBar(){
  const navigate = useNavigate();

  return <div>
          <button onClick={() => {
              navigate("/");
          }}>Landing Page</button>

          <button onClick={() => {
              navigate("/dashboard");
          }}>Dashboard Page</button>
         </div>
}

export default App
