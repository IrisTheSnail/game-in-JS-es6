
import './App.css';
import Header from './components/header';
import { Outlet, Link, Router, Routes, Route } from "react-router-dom";

import AboutMe from './routes/aboutMe';

export default function App() {
  return (
    <>
      <Header></Header>
      <Routes> 
        <Route path='/' element={<>Home</>} />
        <Route path='/aboutMe' element={<>About me</>} />
        <Route path='/projects' element={<>Projects</>} />
      </Routes>
      <homePage></homePage>
    </>
  );
}

