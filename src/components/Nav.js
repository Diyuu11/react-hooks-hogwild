import React from 'react';

const Nav = ({ toggleGreasedFilter, handleSortChange }) => {
  return (
    <div>
      <label>
        <input type="checkbox" onChange={toggleGreasedFilter} />
        Greased Hogs
      </label>
      <select onChange={(e) => handleSortChange(e.target.value)}>
        <option value="name">Sort by Name</option>
        <option value="weight">Sort by Weight</option>
      </select>
    </div>
  );
};

export default Nav;
