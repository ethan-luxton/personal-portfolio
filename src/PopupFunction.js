import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons';
import Popup from './Popup';
import Button from 'react-bootstrap/Button';

function PopupFunction () {
    const [buttonPopup, setButtonPopup] = useState(false);
    // const getCssStyle = document.getElementByClassName('menu-content')
        return (
            <>
            <Button onClick={() => setButtonPopup(true)}><FontAwesomeIcon icon={faDiagramProject}/> Projects</Button>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}/>
            
            
            </>
           );
    
       
}
    

export default PopupFunction;