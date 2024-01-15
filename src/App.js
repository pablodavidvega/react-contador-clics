import './App.css';
import freecodecamp from'./imagenes/click.png';
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className='App'>
      <div className='freeCodeCamp-logo-contenedor'>
        <img className='freecodecamp-logo'
        src={freecodecamp}
        alt='logo clicks' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton
        texto='clic'
        esBotonDeClic={true}
        manejarClic={manejarClic} />

        <Boton
         texto='Reiniciar'
         esBotonDeClic={false}
         manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
