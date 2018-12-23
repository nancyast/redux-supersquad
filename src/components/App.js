import React, { Component } from 'react';
import CharacterList from './CharacterList';
import HeroList from './HeroList';
import SquadStats from './SquadState'

class App extends Component {
  render() {
    return (
      <div className="container">
        <h2>SuperSquad</h2>
        <CharacterList/>
        <HeroList/>
        <SquadStats/>
      </div>
    );
  }
}

export default App;