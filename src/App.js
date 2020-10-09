import React, {useState} from 'react';
import './App.css';
import Instrument from './components/Instrument';

const instrumentArray = [
  {id:0, name: 'Guitarra', picture:"/images/a-guitar.jpg", sound:"/sounds/a-guitar.mp3"},
  {id:1, name: 'Trompeta', picture:"/images/trumpet.jpg", sound:"/sounds/trumpet.mp3"},
  {id:2, name: 'Flauta', picture:"/images/flute.jpg", sound:"/sounds/flute.mp3"},
  {id:3, name: 'Piano', picture:"/images/piano.jpg", sound:"/sounds/piano.mp3"},
  {id:4, name: 'Triángulo', picture:"/images/triangle.jpg", sound:"/sounds/triangle.mp3"},
  {id:5, name: 'Violín', picture:"/images/violin.jpg", sound:"/sounds/violin.mp3"},
  {id:6, name: 'Xilofón', picture:"/images/xilophone.jpg", sound:"/sounds/xilophone.mp3"},
  {id:7, name: 'Pandereta', picture:"/images/pandero.jpg", sound:"/sounds/pandero.mp3"},
  {id:8, name: 'Maracas', picture:"/images/maraca.jpg", sound:"/sounds/maraca.mp3"},
  {id:9, name: 'Redoblante', picture:"/images/redoblante.jpg", sound:"/sounds/redoblante.mp3"},
  {id:10, name: 'Bongós', picture:"/images/bongos.jpg", sound:"/sounds/bongos.mp3"},
  {id:11, name: 'Saxofón', picture:"/images/saxo.jpg", sound:"/sounds/saxo.mp3"},
  {id:12, name: 'Siku', picture:"/images/siku.jpg", sound:"/sounds/siku.mp3"},
  {id:13, name: 'Acordeón', picture:"/images/accordion.jpg", sound:"/sounds/accordion.mp3"},
  {id:14, name: 'Arpa', picture:"/images/harp.jpg", sound:"/sounds/harp.mp3"},
  {id:15, name: 'Guitarra Eléctrica', picture:"/images/e-guitar.jpg", sound:"/sounds/e-guitar.mp3"},
  {id:16, name: 'Batería', picture:"/images/drums.jpg", sound:"/sounds/drums.mp3"},
  {id:17, name: 'Voz', picture:"/images/voice.jpg", sound:"/sounds/voice.mp3"}
];

function App() {
  const [instrument, setInstrument] = useState(0);
  const [instruments, stInstruments] = useState(instrumentArray);
  
  const getInstrument = () => {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const num = getRandomInt(0,17);

    setInstrument(num);
  }

  return (
    <div className="App" >
      <h1 className="Title">¡Bingo de los instrumentos!</h1>
      <button type="button" class="btn btn-danger" onClick={getInstrument}>Obtener uno</button>
      <Instrument instrument={instruments[instrument]}/>
      <div className="infoCont">
        <h6>© Prof. Luciano Pardo</h6>
        <h6>Colegio Américo Vespucio</h6>
      </div>
    </div>
  );
}

export default App;
