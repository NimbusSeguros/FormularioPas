import fondo from '../img/Fondo.png'
import "../FondoImg/fondo.css"
import Logo from '../img/Logo-nimbus.png'
import fotoMano from '../img/Foto.png'
import {ContactUss} from '../contactUss/ContactUss';
import fondo2 from '../img/Fondo-celular.jpg'
import fotoManoCelular from '../img/Foto-manos-celular.png'

export default function FondoImg() {
  return (
   <>
  <div >
<img className='fondo'  src={fondo} alt="" />
<img className='fondo2'  src={fondo2} alt="" />
</div>
<div className='logo'>
<a href="https://nimbusseguros.com/">
<img className='logoImg' src={Logo} alt="" />
</a>
</div>
<p className='titulo'>¿Sos PAS y querés alcanzar mejores resultados?</p>
<p className='parrafo'>Completá el formulario y sumate a NIMBUS, la red de productores asesores de seguro que te brinda las mejores oportunidades de crecimiento profesional. Más de 500 PAS son parte de nuestra familia y crecen junto a nosotros.</p>
<object>
<div className='caja'>
  <img className='fotoMano' src={fotoMano} alt="" />
  <img className='fotoManoCelular' src={fotoManoCelular} alt="" />
</div>
<div className='caja'>

  <ContactUss/>
</div>
</object>

  </>
  )
}
