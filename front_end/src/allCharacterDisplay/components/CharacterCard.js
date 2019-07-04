import React from 'react';

const CharacterCard = (props) => {
  return(
    <div>
      <div>{props.character.first_name} {props.character.last_name}</div>
      <div>{props.character.race}</div>
      <div>{props.character.job}</div>
      <div>{props.character.age}</div>
    </div>
  )
}

export default CharacterCard;
