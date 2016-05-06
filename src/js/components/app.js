
import React from 'react';
import ReactDOM from 'react-dom';

import { RippleButton } from './index.js';

require('../../sass/main.sass')

class App extends React.Component {

  render(){
    return(
      <RippleButton>Click On Me!</RippleButton>
    )
  }

}


ReactDOM.render(<App />, document.getElementById("app"))
