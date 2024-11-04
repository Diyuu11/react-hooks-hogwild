import React, { useState } from 'react';

const HogForm = ({ addHog }) => {
  const [newHog, setNewHog] = useState({
    name: '',
    specialty: '',
    weight: 0,
    greased: false,
    image: '',
    'highest medal achieved': ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewHog({
      ...newHog,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addHog(newHog);
    setNewHog({
      name: '',
      specialty: '',
      weight: 0,
      greased: false,
      image: '',
      'highest medal achieved': ''
    });
  };

  return (
    <form onSubmit={handleSubmit} >
      <input type="text" name="name" placeholder="Name" value={newHog.name} onChange={handleChange} required />
      <input type="text" name="specialty" placeholder="Specialty" value={newHog.specialty} onChange={handleChange} />
      <input type="number" name="weight" placeholder="Weight" value={newHog.weight} onChange={handleChange} required />
      <label>
        <input type="checkbox" name="greased" checked={newHog.greased} onChange={handleChange} />
        Greased
      </label>
      <input type="text" name="image" placeholder="Image URL" value={newHog.image} onChange={handleChange} />
      <input type="text" name="highest medal achieved" placeholder="Highest Medal Achieved" value={newHog['highest medal achieved']} onChange={handleChange} />
      <button type="submit">Add Hog</button>
    </form>
  );
};

export default HogForm;
