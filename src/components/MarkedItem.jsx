import React, { useMemo } from 'react'
import { StyledItem, StyledMarker } from './styles/MarkedItem.components';

const MarkedItem = ({item, query, onItemSelected}) => {

 const {left, right, center} = useMemo(() => getPositions(item, query), [item, query]);

 function getPositions(item, query){
  const queryLowerCase = query.toLowerCase();
  const index = item.name.toLowerCase().indexOf(queryLowerCase);
  const left = item.name.slice(0, index);
  const right = item.name.slice(index + queryLowerCase.length);
  const center = item.name.slice(index, index + queryLowerCase.length);

  return {
   left,
   center,
   right
  }
 }

 const handleClick = () =>{
  onItemSelected(item)
 }

  return (
    <StyledItem onClick={handleClick}>
     {left}
     <StyledMarker style={{backgroundColor: "yellow", fontWeight: "bolder"}}>{center}</StyledMarker>
     {right}
    </StyledItem>
  )
}

export default MarkedItem