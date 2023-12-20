import React, { useState } from 'react';
import './sort.css';

interface SortDropDownProps {
  onSortChange: (option: string) => void;
}

const SortDropDown: React.FC<SortDropDownProps> = ({ onSortChange }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const option = event.target.value;
    setSelectedOption(option);
    onSortChange(option); // Call the callback with the selected option
  };

  return (
    <div className='container'>
      <select className='SortDropDown' value={selectedOption} onChange={handleSortChange}>
        <option value="mostView">Most View</option>
        <option value="latestPost">Latest Post</option>
      </select>
    </div>
  );
};

export default SortDropDown;
