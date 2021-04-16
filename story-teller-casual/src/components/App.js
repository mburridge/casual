import { React, useEffect } from 'react';
import WebFont from 'webfontloader';

import StoryBlock from './StoryBlock'


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
      <StoryBlock />

    </div>
  );
}

export default App;