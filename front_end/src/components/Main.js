import React, { Component } from 'react';
import Menu from '../menu/Menu';

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
    this.setReveal = this.setReveal.bind(this)
  }

  setReveal(revealObject){
    this.setState(revealObject)
  }

  determineRender(){
    if(this.state.menuReveal){
      return <Menu setReveal= {this.setReveal} />
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
