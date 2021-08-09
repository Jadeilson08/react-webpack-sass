import React, { useState, useEffect } from 'react';

const Characters = () => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character`)
      .then(response => response.json())
      .then(data => setCharacter(data.results));
  }, []);

  return (
    <div className="container">
      <div className="characters">
        {character.map(item => {
          <div className="box" key={item.id}>
            <img src="{item.image}" alt="" />
          </div>;
        })}
      </div>
    </div>
  );
};

export default Characters;
