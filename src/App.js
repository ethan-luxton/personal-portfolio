import React, { useState, useEffect} from 'react';
import './index.css';

import Header from './Header';
import Main from './Main';


function App() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
        <Header/>
        <Main/>
    </>
  );
}

export default App;
