import React from 'react';

const Header = ({ title }) => {
  return (
    <>
      <header>
        <div className="container">
          <div className="content">
            <h1 className="title">{title}</h1>
            <p className="text">
              This project ilustrate the characters from Rick and Morty
            </p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
