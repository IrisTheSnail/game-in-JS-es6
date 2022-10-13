import './style/app.css';
import './style/houm.css';
import './style/header.css';
import './style/aboutMe.css';

import Header from './components/header';
import Houm from './components/Houm';
import About from './components/aboutMe';

export default function App() {
  return (
    <>
      <Header></Header>
      <Houm></Houm>
      <About></About>
    </>
  );
}