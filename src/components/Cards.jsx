import React from 'react';
import Modal from 'react-modal';

const Cards = ({modalIsOpen, setModalIsOpen}) => {
    return (
        <Modal 
            ClassName="modal" 
            isOpen={modalIsOpen} 
            onRequestClose={ () => setModalIsOpen(false) }
            style={
                {
                    content: {
                        color: '#cd6E1B',
                        height: '370px',
                        width: '300px',
                        margin: 'auto',
                        borderRadius: '20px',
                        borderColor: '#cd6E1B',
                    }
                }
            }
        >
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={ () => setModalIsOpen(false) }>
                <span aria-hidden="true">&times;</span>
            </button>
            <br/>
            <h3>Descargar cartones</h3>
            <a href="/cards/Card01.pdf" download>Cartón 1</a><br/>
            <a href="/cards/Card02.pdf" download>Cartón 2</a><br/>
            <a href="/cards/Card03.pdf" download>Cartón 3</a><br/>
            <a href="/cards/Card04.pdf" download>Cartón 4</a><br/>
            <a href="/cards/Card05.pdf" download>Cartón 5</a><br/>
            <a href="/cards/Card06.pdf" download>Cartón 6</a><br/>
            <a href="/cards/Card07.pdf" download>Cartón 7</a><br/>
            <a href="/cards/Card08.pdf" download>Cartón 8</a><br/>
            <a href="/cards/Card09.pdf" download>Cartón 9</a><br/>
            <a href="/cards/Card10.pdf" download>Cartón 10</a><br/>
        </Modal>
    )
}

export default Cards;