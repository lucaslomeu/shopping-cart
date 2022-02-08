import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './InputSearch.scss';

const InputSearch = ({ onClick, onChange }) => {
  const [value, setValue] = useState('');

  const handleSearch = (e) => {
    setValue(e.target.value);
    onChange();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setValue(e.target.value);
      onClick(value);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="search"
        className="nav-subitem"
        placeholder="Digite sua busca..."
        onChange={handleSearch}
        onKeyPress={handleKeyPress}
      />
      <FiSearch onClick={() => onClick(value)} className="search-btn" />
    </div>
  );
};

export default InputSearch;
