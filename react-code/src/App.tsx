import './App.css';

import {ReactElement} from 'react';

import Home from './containers/Home';

function App(): ReactElement {
  return (
    <div className="App">
      <Home templatesUrl="/v1/templates.json" />
    </div>
  );
}

export default App;
