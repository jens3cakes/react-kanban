import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../../cardAction/action'

class AddCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status_id: "",
      assigned_to: "",
      title: "",
      body: "",
      priority_id: "",
      created_by: ""
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.addNewCard = this.addNewCard.bind(this);
  }
  changeHandler(event) {
    switch (event.target.id) {
      case "assigned_to":
        return this.setState({ assigned_to: event.target.value });
      case "task":
        return this.setState({ title: event.target.value });
      case "status":
        return this.setState({ status_id: event.target.value });
      case "body":
        return this.setState({ body: event.target.value });
      case "created_by":
        return this.setState({ created_by: event.target.value });
      case "priority_id":
        return this.setState({ priority_id: event.target.value });
      default:
        break;
    }
  }
  addNewCard(event) {
    console.log('add', event)
    event.preventDefault();
    const data = {
      status_id: this.state.status_id,
      assigned_to: this.state.assigned_to,
      task: this.state.title,
      body: this.state.body,
      priority_id: this.state.priority_id,
      created_by: this.state.created_by
    }
    console.log('add2', data)
    this.props.addCard(data)
  }

  render() {
    const { assigned_to, task, status, body, priority_id, created_by } = this.state;
    return (
      <div className="add-card-form">
        <input type='text' id="assigned_to" value={assigned_to} onChange={this.changeHandler} placeholder='assigned to' />
        <input type='text' id="task" value={task} onChange={this.changeHandler} placeholder='task' />
        <input type='text' id="status" value={status}
          onChange={this.changeHandler} placeholder='status' />
        <input type='text' id="body" value={body} onChange={this.changeHandler} placeholder='body' />
        <input type='text' id="priority_id" value={priority_id} onChange={this.changeHandler} placeholder="priority" />
        <input type="text" id="created_by" value={created_by} onChange={this.changeHandler} placeholder="created by" />
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














