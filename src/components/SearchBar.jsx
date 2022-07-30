import React, { useState } from 'react'
import Results from './Results';
import { SearchBarContainer, StyledInput } from './styles/SearchBar.components';

const SearchBar = ({items, onItemSelected}) => {
 const [query, setQuery] = useState("r");
 const [results, setResults] = useState([]);

 const handleChange = (e) =>{
  const value = e.target.value;
  setQuery(value);
 }

 const handleResults = (items) =>{
  setResults(items)
 }

  return (
    <SearchBarContainer>
      {results && <span>{results.length} results</span>}
     <StyledInput type="text" onChange={handleChange} value={query}></StyledInput>
     <Results items={items} onItemSelected={onItemSelected} query={query} onResultsCalculated={handleResults} />
    </SearchBarContainer>
  )
}

export default SearchBar