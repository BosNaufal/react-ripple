/*! Copyright (c) 2016 Naufal Rabbani (http://github.com/BosNaufal)
	* Licensed Under MIT (http://opensource.org/licenses/MIT)
	*
	* React Ripple - Version 1.0.0
  *
  * Adopted from : https://github.com/nelsoncash/angular-ripple
	*
	*/


import React from 'react';

class Ripple extends React.Component {

  constructor() {
    super();
    this.state = {
      animate: false,
      width: 0,
      height: 0,
      top: 0,
      left: 0
    }
  }

  render () {
    return (
      <div className={"Ripple " + (this.state.animate ? "is-reppling" : "")} ref="ripple" style={{
          top: this.state.top+"px",
          left: this.state.left+"px",
          width: this.state.width+"px",
          height: this.state.height+"px"
      }}></div>
    )
  }


  reppling(cursorPos){

    // Get the element
    let $ripple = this.refs.ripple
    let $button = $ripple.parentElement

    let buttonStyle = window.getComputedStyle($button)
    let buttonPos = $button.getBoundingClientRect()

    let buttonWidth = $button.offsetWidth
    let buttonHeight = $button.offsetHeight

    // Make a Square Ripple
    let rippleWidthShouldBe = Math.max(buttonHeight,buttonWidth)

    // Make Ripple Position to be center
    let centerize = rippleWidthShouldBe / 2

    this.setState({
      animate: true,
      width: rippleWidthShouldBe,
      height: rippleWidthShouldBe,
      top: cursorPos.top - buttonPos.top - centerize,
      left: cursorPos.left - buttonPos.left - centerize
    })
  }

  componentWillReceiveProps(nextProps) {
    let cursorPos = nextProps.cursorPos

    // If Has Animated, set state to "false" First
    if(this.state.animate){
      this.setState({ animate: false }, () => {
        this.reppling(cursorPos)
      })
    }
    // else, Do Reppling
    else this.reppling(cursorPos)
  }

}

export default Ripple;
