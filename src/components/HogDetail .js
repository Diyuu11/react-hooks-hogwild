import React from 'react';

const HogDetail = ({ hog }) => {
  return (
    <div>
      <p><strong>Specialty:</strong> {hog.specialty}</p>
      <p><strong>Weight:</strong> {hog.weight}</p>
      <p><strong>Greased:</strong> {hog.greased ? 'Yes' : 'No'}</p>
      <p><strong>Highest Medal Achieved:</strong> {hog['highest medal achieved']}</p>
    </div>
  );
};

export default HogDetail;
