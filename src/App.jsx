import { Container } from 'react-bootstrap'
import Frase from './components/Frase'
import logo from './assets/logosimpson.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './App.css'
import { useEffect, useState } from 'react';


function App() {
  const [frasePersonaje, setFrasePersonaje] = useState({})

  useEffect(()=>{
    consultarAPI();
  },[])

  const consultarAPI = async()=>{
    try {
      console.log('hola mundo')
    // enviar una solicitud get
    const respuesta = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    const datos = await respuesta.json();
    console.log(datos[0])
    // respuesta
    // almacenar la respuesta en el state
    console.log(respuesta)
    if (respuesta.status === 200) {
      setFrasePersonaje(datos[0])
    }
    } catch (error) {
      console.log(error)
      // agregar un mensaje final para el usuario
    }
    
  }
  return (
    <Container className='text-center my-5'>
      <img src={logo} alt="Logo simpson" className='w-100 mb-4'/>
      <Frase frasePersonaje={frasePersonaje}></Frase>
      <Button variant="warning" className='mt-2' onClick={consultarAPI}>Enviar</Button>
    </Container>
  )
}

export default App
