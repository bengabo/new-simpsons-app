import React from 'react';

import './SimpCharacter.css'

function SimpCharacter({character}){
  return(
    <div className="container">
      <div className="characterSheet">
      <style>
        @import url('https://fonts.googleapis.com/css?family=Rock+Salt&display=swap');
      </style>
        <img src={character.image}/>  
        <h3 className="name">{character.character}</h3>
      </div>
      <p className="quote">"{character.quote}"</p>
    </div>
  );
};

export default SimpCharacter;