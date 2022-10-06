import React, { useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';

import { useNavigate, useParams } from 'react-router-dom'


import './SearchForm.css'

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const navigate = useNavigate();
  
  const handleSubmitHandler = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  }


  return (
    <form className="search-form" onSubmit={handleSubmitHandler}>
      <input className="search-input" 
            type="search" placeholder="Search" aria-label="Search" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}/>
      <button type="submit" className="search-btn">
        <SearchIcon />
      </button>
    </form>
  )
}

export default SearchForm
