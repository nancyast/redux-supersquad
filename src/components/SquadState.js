import React, { Component } from 'react';
import { connect } from 'react-redux';

class SquadStats extends Component {
  strength(){
    let strength = 0;
    this.props.heroes.forEach(hero => {
      strength += hero.strength;
    });
    return strength;
  }

  intelligence(){
    let intelligence = 0;
    this.props.heroes.forEach(hero => {
      intelligence += hero.intelligence;
    });
    return intelligence;
  }

  render(){
    return (
      <div className="column">
        <h4>Squad Stats</h4>
        <ul>
          <li>
            <b>Overall Strength: </b> {this.strength()}
          </li>
          <li>
            <b>Overall Intelligence: </b> {this.intelligence()}
          </li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return ({
    heroes : state.heroes
  })
}

export default connect(mapStateToProps, null)(SquadStats);