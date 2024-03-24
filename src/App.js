import React from 'react';
import Cardlist from './Cardlist';
import Search from './Search';
import { robots } from './robots';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value});
  }

  render() {
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div>
        <h1>Robofriends</h1>
        <Search searchChange={this.onSearchChange}/>
        <Cardlist robots={filteredRobots} />
      </div>
    )
  }
  
}

export default App;