import React from 'react';
import {Howl, Howler} from "howler";


const Instrument = ({instrument}) => {
    
    const {name, picture, sound} = instrument;
    
    const soundPlay = (src) => {
        Howler.stop();
        const sound = new Howl({
            src
        });
        sound.play();
    }

    return (
        <div>
            <div className="instrumentCard">
                <div className = "instrumentTitle">
                    <h2>{name}</h2>
                </div>
                <img className="image" src={picture} alt={name}/>
                <br/>
                <div className ="buttonCont">
                    <button type="button" class="btn btn-outline-warning" onClick={ () => soundPlay(sound) }>Escuchar</button>
                    <button type="button" class="btn btn-outline-danger" onClick={() => Howler.stop()}>Detener</button>
                </div>
            </div>
        </div>
    )
};

export default Instrument;