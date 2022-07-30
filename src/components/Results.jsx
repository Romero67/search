import React, { useEffect, useMemo, useState } from 'react'
import MarkedItem from './MarkedItem';
import { ResultsContainer } from './styles/Results.components';

const Results = ({items,onItemSelected,query,onResultsCalculated}) => {
  const [results, setResults] = useState([]);

  const filteredItems = useMemo(() => findMatch(items, query), [query, items])

  useEffect(() => {
    onResultsCalculated(results)
  }, [results]);

  function findMatch(items, query){
    const res = items.filter(i => {
      return i.name.toLowerCase().indexOf(query.toLowerCase()) >= 0 && query.length > 0
    });

    setResults(res);
    return res;
  }

  return (
    <ResultsContainer>
      {
        filteredItems.map(el => <MarkedItem key={el.id} item={el} query={query} onItemSelected={onItemSelected}/>)
      }
    </ResultsContainer>
  )
}

export default Results