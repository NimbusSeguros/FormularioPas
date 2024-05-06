
import "../Sumarse/sumarse.css"
import fondoGris from '../img/Fondo-gris.png'
import  { useState } from 'react';
import fondoGrisCelular from '../img/Fondo-gris-celular.jpg';


export default function Sumarse() {

    const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({top: 0,
    behavior:"smooth"});
        
       
  };

  window.addEventListener('scroll', handleScroll);

    return (
        <>
            <div className="cont">

                <img className='fondoGris' src={fondoGris} alt="" />
                <img className='fondoGrisCelular' src={fondoGrisCelular} alt="" />
            </div>
            <p className='text'>Tenemos el mejor equipo humano para brindarte un apoyo constante y personalizado, para que puedas expandir tu cartera de clientes con las mejores opciones del mercado. </p>
            <h2>
                Crecemos con vos 
            </h2>
            
            <button id= "btn_scrolltop" onClick={scrollToTop}>¡Quiero sumarme!</button>

        </>
    )
}
