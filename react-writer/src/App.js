import React from 'react';

import './App.css';
import './text/paragraph1';
import Paragraph1 from './text/paragraph1';
import Paragraph2A from './text/paragraph2A';
import Paragraph2B from './text/paragraph2B';

function App() {
  return (
    <div className="App">
      <Paragraph1/>
      <Paragraph2A/>
      {/* <Paragraph2B/> */}
    </div>
  );
}

export default App;
