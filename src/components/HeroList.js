import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeCharacterById } from '../actions';

class HeroList extends Component {
  render() {
  console.log('this.props: ', this.props);

    return (
      <div className="column">
        <h4>Your Hero Squad</h4>
        <ul>
          {
            this.props.heroes.map(hero =>{
              return (
                <li key = {hero.id}>
                  <div className="name">
                    {
                      hero.name
                    }
                  </div>
                  <div className="action" onClick={() => this.props.removeCharacterById(hero.id)}>
                    x
                    </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return ({
    heroes: state.heroes
  })
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({removeCharacterById}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroList);