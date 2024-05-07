import React,{ useState, useEffect} from 'react';
import Cardlist from './Cardlist';
import Search from './Search';
import Scroll from './Scroll';
import './App.css';

const App = () => {
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {setRobots(users)});
  })

  const [robots, setRobots] = useState([])
  const [searchfield, setSearchfeild] = useState('')

  const onSearchChange = (event) => {
    setSearchfeild(event.target.value);
  }

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return (
      <div className='tc'>
        <h1 className='f1'>Robofriends</h1>
        <Search searchChange={onSearchChange}/>
        <Scroll>
        <Cardlist robots={filteredRobots} />
        </Scroll>
      </div>
    )
}
  

export default App;