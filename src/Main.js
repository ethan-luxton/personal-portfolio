import React from 'react'
import Card from 'react-bootstrap/Card';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFile} from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';



class Main extends React.Component {
    
    
    render() {
        return (
            

                
            
            
            
                
            <body>
                
                    
    
                <section>
                    <h1>About</h1>
                    
                </section>
                
                <section class='cards'>
                    <div>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>My Resume</Card.Title>
                                <Card.Text>
                                    For more information on my relevant work experience, click the link below to view my most up-to-date resume.
                                </Card.Text>
                                <Button href='https://drive.google.com/file/d/1RNsPPZ63djnJyBbikAo831UWBMC5E_HJ/view?usp=sharing' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFile}/> Resume</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    
                    <div>
                        <Card style={{ width: '18rem' }}>
    
                            <Card.Body>
                                <Card.Title>My Projects</Card.Title>
                                <Card.Text>
                                    For more information on my relevant work experience, click the link below to view my most up-to-date resume.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card style={{ width: '18rem' }}>
    
                            <Card.Body>
                                <Card.Title>My Resume</Card.Title>
                                <Card.Text>
                                    For more information on my relevant work experience, click the link below to view my most up-to-date resume.
                                </Card.Text>
                                <Button href='https://drive.google.com/file/d/1RNsPPZ63djnJyBbikAo831UWBMC5E_HJ/view?usp=sharing' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFile}/> Resume</Button>
                            </Card.Body>
                        </Card>
                    </div>
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
