import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons'


class Header extends React.Component {
  
  render() {
    
    return (
      
      <header>
            <div style={{visibility: 'hidden'}}>&nbps;</div>     
            <div><h1 class="htext">Ethan Luxton <FontAwesomeIcon icon={faCode} className="titleFA"/></h1></div>  
            <div><a class="cta" href="mailto:luxtonethan@hotmail.com" target="_blank" rel="noopener noreferrer"><button><FontAwesomeIcon icon={faEnvelope} className="faEnvelope"/><FontAwesomeIcon icon={faEnvelopeOpen} className="faEnvelopeOpen"/></button></a></div>
      </header>
     
      
    )
    
  }
}

export default Header;