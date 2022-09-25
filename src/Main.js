import React from 'react'
import PopupFunction from './PopupFunction'
import Popup from './Popup';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFile, faDiagramProject} from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';



class Main extends React.Component {
    
    
    render() {
        return (
            <body>
                
                    
    
                <section>
                    <h1>About</h1>
                    
                </section>
                <Popup>
            
                </Popup>
                <section class='cards'>
                    <Container>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>My Resume</Card.Title>
                                <Card.Text>
                                    For more information on my relevant work experience, click the link below to view my most up-to-date resume.
                                </Card.Text>
                                <Button href='https://drive.google.com/file/d/1RNsPPZ63djnJyBbikAo831UWBMC5E_HJ/view?usp=sharing' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFile}/> Resume</Button>
                            </Card.Body>
                        </Card>
                    </Container>
                    
                    <Container>
                        <Card style={{ width: '18rem' }}>
    
                            <Card.Body>
                                <Card.Title>My Projects</Card.Title>
                                <Card.Text>
                                    For more information on my relevant work experience, click the link below to view my most up-to-date resume.
                                </Card.Text>
                                <PopupFunction/>
                            </Card.Body>
                        </Card>
                    </Container>
                    <Container>
                        <Card style={{ width: '18rem' }}>
    
                            <Card.Body>
                                <Card.Title>My Resume</Card.Title>
                                <Card.Text>
                                    For more information on my relevant work experience, click the link below to view my most up-to-date resume.
                                </Card.Text>
                                <Button href='https://drive.google.com/file/d/1RNsPPZ63djnJyBbikAo831UWBMC5E_HJ/view?usp=sharing' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFile}/> Resume</Button>
                            </Card.Body>
                        </Card>
                    </Container>
                </section>
                
                <section id="photography">
                    <div class="scroll-grid-container">
                        <div class="photo-grid">
                            
                        </div>
                    </div>
                </section>
            </body>
        )
    }
}

export default Main
