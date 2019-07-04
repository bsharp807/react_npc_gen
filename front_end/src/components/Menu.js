import React from 'react';
import CharacterMenu from '../menu/components/CharacterMenu';
import CreateMenu from '../menu/components/CreateMenu';
import RandomMenu from '../menu/components/RandomMenu';

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
