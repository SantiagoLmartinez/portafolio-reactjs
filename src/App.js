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
        {/* <div className={`tt ${text? 'verde' : 'rojo'}`}>
          <p className={`${text? 'verde' : 'rojo'}`} id='test'>texto de prueba</p>
          <button text={text} onClick={cambiarTexto}> click</button>
        </div> */}
      <FooterComp/>
      {/* <Portada/> */}
    </div>
  );
}

export default App;

