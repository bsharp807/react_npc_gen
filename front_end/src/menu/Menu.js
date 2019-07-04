import React from 'react';
import CharacterMenu from './components/CharacterMenu';
import CreateMenu from './components/CreateMenu';
import RandomMenu from './components/RandomMenu';

const Menu = (props) => {
  return(
    <div>
      <CharacterMenu />
      <CreateMenu />
      <RandomMenu />
    </div>
  )
}

export default Menu;
