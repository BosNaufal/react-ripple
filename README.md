# React Ripple
[React](http://facebook.github.io/react) Component to Make Google Material Design Ripple Effect. It's adopted from [angular-ripple](https://github.com/nelsoncash/angular-ripple)

[DEMO](https://bosnaufal.github.io/react-ripple)

## Install
You can import [react-ripple](./src/js/components/index.js) to your react component file like [this](./src/js/components/app.js) and process it with your preprocessor.;


You can install it via NPM
```bash
npm install react-ripple-effect
```


## Usage
Usage With Predefined Ripple Button
```javascript

import React from 'react';
import ReactDOM from 'react-dom';

import { RippleButton } from 'react-ripple-effect';

// Don't Forget to Include The Sass File~
require('../../sass/_Ripple.sass')

class App extends React.Component {

  render(){
    return(
      <RippleButton>Click On Me!</RippleButton>
    )
  }

}


ReactDOM.render(<App />, document.getElementById("app"))


```

Usage Standalone Ripple Component
```javascript

import React from 'react';

import { Ripple } from 'react-ripple-effect';

class RippleButton extends React.Component {

  constructor() {
    super();
    this.state = {
      cursorPos: {}
    }
  }

  render () {
    return (
      <button
        className="Ripple-parent"
        onMouseUp={ this.handleClick.bind(this) }
        onTouchend={ this.handleClick.bind(this) } >
        { this.props.children }
        <Ripple cursorPos={ this.state.cursorPos } />
      </button>
    )
  }

  handleClick(e){
    // Get Cursor Position
    let cursorPos = {
      top: e.clientY,
      left: e.clientX
    }
    this.setState({ cursorPos: cursorPos })
  }

}

export default RippleButton;
```

## Props
##### cursorPos (Object)
You need to describe the cursor position ( when parent is clicked ) with the structure like the object bellow
```javascript
let cursorPos = {
  top: e.clientY,
  left: e.clientX
}
```

## Thank You for Making this useful~

## Let's talk about some projects with me
Just Contact Me At:
- Email: [bosnaufalemail@gmail.com](mailto:bosnaufalemail@gmail.com)
- Skype Id: bosnaufal254
- twitter: [@BosNaufal](https://twitter.com/BosNaufal)

## License
[MIT](http://opensource.org/licenses/MIT)
Copyright (c) 2016 - forever Naufal Rabbani
