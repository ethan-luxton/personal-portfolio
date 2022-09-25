import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import PopupFunction from './PopupFunction';

function Popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
            <h1>My Projects</h1>
            <button className='close-btn' onClick={() => props.setTrigger(false)}><FontAwesomeIcon icon={faCircleXmark} className='close'/></button>
            {props.children}
        </div>
    </div>
  ) : "";
}

export default Popup
