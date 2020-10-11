import React, {useState} from 'react';
import './App.css';
import Instrument from './components/Instrument';
import List from './components/List';

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

const firstCard = {id:0, name: '', picture:"/images/instruments.jpg", sound:""};

function App() {
  const [instrument, setInstrument] = useState(firstCard);
  const [instruments, setInstruments] = useState(instrumentArray);
  const [list, setList] = useState([]);
  const [max, setMax] = useState (17);
  
  const showInstrument = instruments.length ? (
    <Instrument instrument={instrument}/>
  ) : (
    <div>
      <p>No quedan más Instrumentos!</p>
      <button type="button" className="btn btn-danger" onClick={resetGame}>Volver a empezar</button>
    </div>
  );

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const getInstrument = () => {
    const num = getRandomInt(0,max);
    setMax(max -1);

    const kicked = instruments[num];
    const instrumentList = [...list, kicked];
    setInstrument(kicked);
    setList(instrumentList);
    
    let filteredInstruments = instruments.filter(instrument => {
      return instrument.id !== kicked.id;
    });
    setInstruments(filteredInstruments);
  }

  const resetGame = () => {
    setInstrument(firstCard);
    setInstruments(instrumentArray);
    setList([]);
  }

  return (
    <div className="App" >
      <h1 className="Title">¡Bingo de los instrumentos!</h1>
      <button type="button" className="btn btn-danger" onClick={getInstrument}>Obtener uno</button>
      <div>
        {showInstrument}
      </div>
      <List list={list}/>
      <div className="infoCont">
        <h6>© Prof. Luciano Pardo</h6>
        <h6>Colegio Américo Vespucio</h6>
      </div>
    </div>
  );
}

export default App;
