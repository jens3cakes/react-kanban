import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import Board from '../Board'
import AddCard from '../AddCard';
import {loadCards} from '../../cardAction/action';

class App extends Component {
  constructor(props) {
    super(props)
    this.makeNewCard = this.makeNewCard.bind(this);
  }
  
  makeNewCard({ name, task, status, type }) {
    const { tasks } = this.state;
    const _id = this.state.currentId;
    const newCard = { _id, name, task, status, type };
    this.setState({
      currentId: _id + 1,
      tasks: [...tasks, newCard]
    })
  }
  
  render() {
    return (
      <div className='App'>
        <Board tasks={this.props.cards}/>
        <AddCard makeNewCard={this.makeNewCard} />
      </div>

);
}
componentDidMount(){
  console.log('cdm firing');
  const cardTasks =  [
    {
      _id: 1,
      name: 'Jennifer',
      type: 'parent',
      task: 'Cook dinner',
      status: 'In progress'
      
    },
    {
      _id: 2,
      name: 'Bert',
      type: 'parent',
      task: 'Wash clothes',
      status: 'In queque'
    },
    {
      _id: 3,
      name: 'Lauren',
      type: 'child',
      task: 'Put dishes away',
      status: 'Done'
    }
  ]
  this.props.loadCards(cardTasks)
}
}

const mapStateToProps = (state) => {
  return{
    cards: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadCards: (cards) => {
      dispatch(loadCards(cards));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
