import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Search() {
  const [term, setTerm] = useState('');
  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className="search">
      <input placeholder="Search community" onChange={handleChange} />
      <Link to={`search/${term}`}>Search</Link>
    </div>
  );
}

export default Search;
