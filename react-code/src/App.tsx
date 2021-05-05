import './App.css';

import React, {ReactElement} from 'react';

import WithNavbar from './containers/page/WithNavbar';

function App(): ReactElement {
  return (
    <div className="App">
      <WithNavbar />
    </div>
  );
}

export default App;
