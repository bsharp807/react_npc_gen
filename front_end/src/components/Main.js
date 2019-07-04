import React, { Component } from 'react';
import Menu from './Menu';

class Main extends Component{
  constructor(props){
    super(props)
    this.state = {
      menuReveal: true,
      individualCharacterReveal: false,
      allCharacterReveal: false,
      createCharacterReveal: false,
    }

    this.determineRender = this.determineRender.bind(this)
  }

  determineRender(){
    if(this.state.menuReveal){
      return <Menu />
    }
  }

  render() {
    return(
      <div>
        {this.determineRender()}
      </div>
    )
  }

}

export default Main;
