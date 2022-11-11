import './style/app.css';
import './style/houm.css';
import './style/header.css';
import './style/aboutMe.css';
import './style/skills.css';
import './style/projects.css';

import Header from './components/header';
import Houm from './components/Houm';
import About from './components/aboutMe';
import Skills from './components/skills';
import Projects from './components/projects';


export default function App() {
  return (
    <>
      <Header></Header>
      <Houm></Houm>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      
    </>
  );
}