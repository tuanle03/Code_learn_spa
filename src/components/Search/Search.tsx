import { useState } from 'react';
import './search.css'

const Search = () => {
  const [searchKey, setSearchKey] = useState("");
  return (
    <div className='search_bar'>
      <span className='long_question'>Hello, what do you want to learn?</span>
      <span className='short_question'>Let's learn!</span>
      <div className = "bar">
          <i className="fi fi-rr-search"></i>
          <form>
            <label>
            <input type='text' placeholder='Search' value={searchKey} onChange={(e) => setSearchKey(e.target.value)}/>
            </label>
          </form>
          <i className="fi fi-rr-paper-plane submit"></i>
      </div>
    </div>
  )
}

export default Search
