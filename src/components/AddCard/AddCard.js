import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../../cardAction/action'

class AddCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      task: "",
      status: "",
      type: ""
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.addNewCard = this.addNewCard.bind(this);
  }
  changeHandler(event) {
    switch (event.target.id) {
      case "name":
        return this.setState({ name: event.target.value });
      case "task":
        return this.setState({ task: event.target.value });
      case "status":
        return this.setState({ status: event.target.value });
      case "type":
        return this.setState({ type: event.target.value });
      default:
        break;
    }
  }
  addNewCard(event) {
    console.log('add',event)
    event.preventDefault();
    const data = {
      name: this.state.name,
      task: this.state.task,
      status: this.state.status,
      type: this.state.type
    }
    console.log('add2',data)
    this.props.addCard(data)
  }

  render() {
    const { name, task, status, type } = this.state;
    return (
      <div className="add-card-form">
        <input type='text' id="name" value={name} onChange={this.changeHandler} placeholder='name' />
        <input type='text' id="task" value={task} onChange={this.changeHandler} placeholder='task' />
        <input type='text' id="status" value={status}
          onChange={this.changeHandler} placeholder='status' />
        <input type='text' id="type" value={type} onChange={this.changeHandler} placeholder='type' />
        <button onClick={this.addNewCard}> Make New Card</button>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (card) => {
      console.log('map', card)
      dispatch(addCard(card));
    }
  }
}
export default connect(null, mapDispatchToProps)(AddCard);
//  const makeNewCard=(name, task, status, type ) =>{
  //   const { cards } = this.props;
  //   console.log('makeNewCard',this.props)
  //   const newCard = {name, task, status, type}
  // this.makeNewCard = this.makeNewCard.bind(this);
  //tasks: [...cards, newCard]
  // }
  // makeNewCard({name,task,status,type});
  // axios.post('api/cards', cardTaskData)
  // .then((response) => {
    //   const card = response.data;
    //   console.log('post', card)
    //   this.state.addCard(card)
    // this.setState({
      //   name:"",
      //   task:"",
      //   status:"",
      //   type:""
      // })
      // // })
      // clickHandler() {
      //   const { name, task, status, type } = this.state;
      //   console.log('click', this.state)
      //   this.setState({ name: "", task: "", status: "", type: "" })
      // }














