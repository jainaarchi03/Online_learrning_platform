import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboard } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center">
      <FontAwesomeIcon icon={faChalkboard} className='text-2xl' />
        <h1 className="text-2xl font-bold p-2 ">LearnSphere</h1>
        </div>
        <nav>
          <Link to="/" className="mx-2 font-medium text-xl">Home</Link>
          <Link to="/courses" className="mx-2 font-medium text-xl">Courses</Link>
          <Link to="/about" className="mx-2 font-medium text-xl">About</Link>
          <Link to="/contact" className="mx-2 font-medium text-xl">Contact</Link>
        </nav>
      </div> 
    </header>
  );
};

export default Header;
