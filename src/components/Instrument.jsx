import React from 'react';
import {Howl, Howler} from "howler";

const Instrument = ({instrument}) => {;
    const {name, picture, sound} = instrument;
    
    const soundPlay = (src) => {
        Howler.stop();
        const sound = new Howl({
            src
        });
        sound.play();
    }

    const showButtons = instrument.name === "Instrumentos" ? (
        <h5 className="startMsg">¡Toca "Obtener uno" para comenzar!</h5> 
    ) : (
        <div className ="buttonCont">
            <button type="button" className="btn btn-outline-success" onClick={ () => soundPlay(sound) }>Escuchar</button>
            <button type="button" className="btn btn-outline-danger" onClick={() => Howler.stop()}>Detener</button>
        </div>
    );

    return (
        <div>
            <div className="instrumentCard">
                <div className = "instrumentTitle">
                    <h3>{name}</h3>
                </div>
                <img className="image" src={picture} alt={name}/>
                <br/>
                {showButtons}
            </div>
        </div>
    )
};

export default Instrument;