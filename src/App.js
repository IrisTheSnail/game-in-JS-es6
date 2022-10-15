import './style/app.css';
import './style/houm.css';
import './style/header.css';
import './style/aboutMe.css';
import './style/skills.css';

import Header from './components/header';
import Houm from './components/Houm';
import About from './components/aboutMe';
import Skills from './components/skills';

export default function App() {
  return (
    <>
      <Header></Header>
      <Houm></Houm>
      <About></About>
      <Skills></Skills>
      
    </>
  );
}