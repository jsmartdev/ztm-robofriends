import React from 'react';
import Card from './Card';
const Cardlist = ({robots}) => {
  const cardSearch = robots.map((user, i) => {
    return <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} />  
  }) 
  return (
    <div>
      {cardSearch}
    </div>
  )
} 

export default Cardlist; 
