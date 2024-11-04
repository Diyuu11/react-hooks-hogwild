import React, { useState } from 'react';
import hogs from '../porkers_data.js'; 
import Nav from './Nav.js';
import HogList from './HogList.js';
import HogForm from './HogForm .js';

const App = () => {
  const [hogsState, setHogsState] = useState(hogs);
  const [filterGreased, setFilterGreased] = useState(false);
  const [sortOption, setSortOption] = useState('name');
  const [hiddenHogs, setHiddenHogs] = useState([]);

  const filteredHogs = hogsState.filter(hog => 
    !hiddenHogs.includes(hog.name) && (!filterGreased || hog.greased)
  );

  const sortedHogs = filteredHogs.sort((a, b) => {
    if (sortOption === 'weight') return a.weight - b.weight;
    return a.name.localeCompare(b.name);
  });

  const toggleGreasedFilter = () => setFilterGreased(!filterGreased);
  const handleSortChange = (option) => setSortOption(option);
  const hideHog = (name) => setHiddenHogs([...hiddenHogs, name]);
  
  const addHog = (newHog) => setHogsState([...hogsState, newHog]);

  return (
    <div>
      <Nav 
        toggleGreasedFilter={toggleGreasedFilter} 
        handleSortChange={handleSortChange} 
      />
      <HogList hogs={sortedHogs} hideHog={hideHog} />
      <HogForm addHog={addHog} />
    </div>
  );
};

export default App;
