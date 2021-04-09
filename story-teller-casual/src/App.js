import './App.css';
import { React, useEffect } from 'react';
import { styled } from 'goober';
import WebFont from 'webfontloader';

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Open Sans', 'Lora']
      }
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Btn>
          Start the story...
        </Btn>
      </header>
    </div>
  );
}

export default App;

const Btn = styled("button")`
  border-radius: 14px;
  padding: 20px;
  border: none;
  font-family: Lora;
`;