import React, { useState } from 'react'
import SearchBar from './SearchBar'
import {StyledButton} from './styles/MainSearch.components'

const people = [
 {
  id: "p1",
  name: 'Chris Rock'
 },
 {
  id: "p2",
  name: 'Superman'
 },
 {
  id: "p3",
  name: 'Vayne'
 },
 {
  id: "p4",
  name: 'Express del a'
 }
]

const calendar = [
 {
  id: "c1",
  name: 'Saturday dinner with my brothers'
 },
 {
  id: "c2",
  name: 'lorem impusn from myself'
 },
 {
  id: "c3",
  name: 'Lyrics eminem'
 },
 {
  id: "c4",
  name: 'RAPRAP rap'
 }
]

const mails = [
 {
  id: "m1",
  name: 'robot@robot.com'
 },
 {
  id: "m2",
  name: 'sqa@sqa.com'
 },
 {
  id: "m3",
  name: 'Red@dragon_40'
 },
 {
  id: "m4",
  name: 'Solad@a.com'
 }
]


const MainSearch = () => {
 const [data, setData] = useState([...people, ...calendar, ...mails]);

 const [selection, setSelection] = useState(null);
 const [currentOption, setCurrentOption] = useState('all');

 const handlerClick = (opcion) =>{
  const op = opcion;

  switch (op) {
   case 'all':
    setData([...people, ...calendar, ...mails]);
    setCurrentOption('all');
    break;
  
   case 'people':
    setData([...people]);
    setCurrentOption('people');
    break;

   case 'calendar':
    setData([...calendar]);
    setCurrentOption('calendar');
    break;

   case 'mails':
    setData([...mails]);
    setCurrentOption('mails');
    break;
   default:
    break;
  }

 }

 const handleOnItemSelected = (item) =>{
  setSelection(item)
 }

  return (
    <div>
     <StyledButton onClick={() => handlerClick('all')}>all</StyledButton>
     <StyledButton onClick={() => handlerClick('people')}>people</StyledButton>
     <StyledButton onClick={() => handlerClick('calendar')}>calendar</StyledButton>
     <StyledButton onClick={() => handlerClick('mails')}>mails</StyledButton>
      {selection && <p>Your selection is: {selection.name}</p>}
     <SearchBar items={data} onItemSelected={handleOnItemSelected}/>

    </div>
  )
}

export default MainSearch