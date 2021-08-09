import React, { useState, useEffect } from 'react';
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const obs$ = ajax.getJSON(`https://api.github.com/users?per_page=5`).pipe(
  map(userResponse => userResponse),
  catchError(error => {
    console.log('error: ', error);
    return of(error);
  })
);

const Characters = () => {
  const [character, setCharacter] = useState();

  useEffect(() => {
    const sub = obs$.subscribe(setCharacter);

    console.log(character);
    return sub.unsubscribe();
  }, []);

  return (
    <>
      <h1>characeter</h1>
      <h2>foo</h2>
    </>
  );
};

export default Characters;
