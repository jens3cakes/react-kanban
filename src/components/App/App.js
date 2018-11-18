import React, { Component } from 'react';
import logo from '../App';
import './App.css';
import Board from '../Board'
import Column from '../Column';
import Card from '../Card';
import AddCard from '../AddCard';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentId: 4,
      tasks: [
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
      ],
    }
    this.makeNewCard = this.makeNewCard.bind(this);

  }
makeNewCard({name, task, status, type}){
  const {tasks} = this.state;
  const _id = this.state.currentId;
  const newCard = {_id, name, task, status, type};
  this.setState({
    currentId:_id + 1,
    tasks: [...tasks, newCard]
  })
}

  render() {
    return (
      <div className='App'>
        <Board title="" />
        <Column title={'In queque'} tasks={this.state} />
        <Column title={'In progress'} tasks={this.state} />
        <Column title={'Done'} tasks={this.state} />
        <AddCard makeNewCard={this.makeNewCard} />

      </div>

    );
  }
}

export default App;
