import React, { useState } from 'react'
import './sort.css'

const SortDropDown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  }
    return (
      <div className='container'>
        <select className='SortDropDown' value={selectedOption} onChange={handleSortChange}>
          <option value="mostView">Most View</option>
          <option value="latestPost">Latest Post</option>
        </select>
      </div>
    );
}

export default SortDropDown;
