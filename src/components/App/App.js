import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Board from '../Board'
import AddCard from '../AddCard/index';
import { loadCards } from '../../cardAction/action';
import axios from 'axios';
import Column from '../Column';

class App extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log('cdm firing');
    this.props.loadCards()
  
  }

  render() {
    console.log('render',this.props.cards)
    return (
      
      <div className='App'>
        <Board tasks={this.props.cards} />
        <Column tasks={this.props.cards}/>
        <AddCard />
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadCards: () => {
      dispatch(loadCards());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// axios.get('/api/cards')
//   .then((res) => {
  //     const cards = res.data
  //   .catch((err) => {
  //     console.log('err')
  //   })
    
  // }
  
  




