import './App.css';
import React,{useState} from 'react';

import { FooterComp } from './Components/Footer';
import { HeaderComp } from './Components/Header';
// import { Portada } from './Components/Portada';
function App() {

  const [text, setText] = useState(false)

  const cambiarTexto = () =>{
    //alert('test')
    setText(!text)
  }

  return (
    <div className='app-container'>
      <HeaderComp/>

      {/* <FooterComp/> */}
    </div>
  );
}

export default App;

