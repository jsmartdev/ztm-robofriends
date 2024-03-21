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
  render() {
    return (
      <div>
        <h1>Robofriends</h1>
        <Search />
        <Cardlist robots={this.state.robots} />
      </div>
    )
  }
  
}

export default App;