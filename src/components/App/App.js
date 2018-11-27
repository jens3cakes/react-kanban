import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Board from '../Board'
import AddCard from '../AddCard/index';
import { loadCards } from '../../cardAction/action';
import { users } from '../../cardAction/action'
import {statuses} from '../../cardAction/action'
import {priority} from '../../cardAction/action'
import {edittedCard} from '../../cardAction/action'
// import EditCard from '../EditCard/index'
// import axios from 'axios';
// import Column from '../Column';

class App extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log('cdm firing');
    //console.log('comp did mount', this.props)
    this.props.loadCards()
    this.props.users()
    this.props.statuses()
    this.props.priority()


  }

  render() {
    //console.log('render', this.props)
    return (

      <div className='App'>
        <Board tasks={this.props.cards} />
        {/* <Column tasks={this.props.cards}/> */}
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
      dispatch(loadCards())
    },
    users: () => {
      //console.log('map app.js users', users)
      dispatch(users)
    },
    statuses: () => {
      //console.log('map app js statues', statuses)
      dispatch(statuses)
    },
    priority: () => {
      //console.log('map app.js priorities', priority)
      dispatch(priority)
    },
    edittedCard: ()=> {
      //console.log('map app.js editcard', edittedCard)
      dispatch(edittedCard)
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






