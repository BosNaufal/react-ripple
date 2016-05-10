/*! Copyright (c) 2016 Naufal Rabbani (http://github.com/BosNaufal)
	* Licensed Under MIT (http://opensource.org/licenses/MIT)
	*
	* React Ripple - Version 1.0.0
  *
  * Adopted from : https://github.com/nelsoncash/angular-ripple
	*
	*/

import React from 'react';

import { Ripple } from './index.js';

class RippleButton extends React.Component {

  constructor() {
    super();
    this.state = {
      cursorPos: {}
    }
  }

  render () {
    return (
      <button ref="button" className="Ripple-parent" onMouseUp={ this.handleClick.bind(this) } onTouchend={ this.handleClick.bind(this) } >
        { this.props.children }
        <Ripple cursorPos={ this.state.cursorPos } />
      </button>
    )
  }

  handleClick(e){
    // Get Cursor Position
    let cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    }
    this.setState({ cursorPos: cursorPos })
  }

}

export default RippleButton;
