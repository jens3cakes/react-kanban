import React, { Component } from 'react';

class AddCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: 0,
      name: "",
      task: "",
      status: "",
      type: ""
    };
    this.onNameChange = this.onNameChange.bind(this);
    this.onTaskChange = this.onTaskChange.bind(this);
    this.onStatusChange = this.onStatusChange.bind(this);
    this.onTypeChange = this.onTypeChange.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }
  onNameChange(event) {
    this.setState({ name: event.target.value })
  }

  onTaskChange(event) {
    this.setState({ task: event.target.value })
  }

  onStatusChange(event) {
    this.setState({ status: event.target.value })
  }

  onTypeChange(event) {
    this.setState({ type: event.target.value })
  }

  clickHandler() {
    
    const { makeNewCard } = this.props;
    const { name, task, status, type } = this.state;
    makeNewCard({ name, task, status, type });
    this.setState({ name: "", task: "", status: "", type: "" })
  }


  render() {
    return (
      <div className="add-card-form">
        <input type='text' value={this.state.name} onChange={this.onNameChange} placeholder='name' />
        <input type='text' value={this.state.task} onChange={this.onTaskChange} placeholder='task'/>
        <input type='text' value={this.state.status}
        onChange={this.onStatusChange} placeholder='status' />
        <input type='text' value={this.state.type} onChange={this.onTypeChange} placeholder='type'/>
        <button onClick={this.clickHandler}> Make New Card</button>
      </div>
    )
  }
}













export default AddCard;