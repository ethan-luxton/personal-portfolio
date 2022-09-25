import React from 'react';
import './index.css';

import Header from './Header';
import Main from './Main';


class App extends React.Component {
  render () {
    return (
      
      <>
        <Header/>
        <Main handleShow={this.handleShow}/>
      </>
      
  
    );
  }
  
}

export default App;
