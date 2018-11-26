import React, { Component } from 'react';
import { connect } from 'react-redux';
import { edittedCard } from '../../cardAction/action'

class EditCard extends Component {
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
    this.editCard = this.editCard.bind(this);
  }
  changeHandler(event) {
    console.log('changeHandler', event.target.value)
const editFormField=[];
console.log(editFormField)
    switch (event.target.id) {
      case "assigned_to":
        editFormField.push(this.setState({ assigned_to: event.target.value }));
        break;
      case "task":
        editFormField.push(this.setState({ title: event.target.value }));
        break;
      case "status":
        editFormField.push(this.setState({ status_id: event.target.value }));
        break;
      case "body":
       editFormField.push(this.setState({ body: event.target.value }));
       break;
      case "created_by":
        editFormField.push(this.setState({ created_by: event.target.value }));
        break;
      case "priority_id":
        editFormField.push(this.setState({ priority_id: event.target.value }));
        break;
      default:
        break;
    }
  }
  editCard(event) {
    console.log('edit', event)
    event.preventDefault();
    const data = {
      status_id: parseInt(this.state.status_id),
      assigned_to: parseInt(this.state.assigned_to),
      task: this.state.title,
      body: this.state.body,
      priority_id: parseInt(this.state.priority_id),
      created_by: parseInt(this.state.created_by)
    }
    console.log('editActionsend', data)
    this.props.edittedCard(data);
    // this.setState({
    //   assigned_to: "",
    //   task: "",
    //   status: "",
    //   body: "",
    //   priority_id: "",
    //   created_by: "",
    // })
  }
  render() {
    console.log('render fail',this.state, this.props)
    const { body, task, assigned_to, status, priority_id, created_by } = this.state;
    return (
      <div className="edit-card-form">
        <select id="assigned_to" onChange={this.changeHandler}>
          <option type="text" className="assignedTo" value={1} >Jennifer</option>
          <option type="text" className="assignedTo" value={2}>Bert</option>
          <option type="text" className="assignedTo" value={3}>Lauren</option>
          <option type="text" className="assignedTo" value={4}>Joshua</option>
          <option type="text" className="assignedTo" value={5}>Mitchell</option>
        </select>

        <input type='text' id="task" value={task} onChange={this.changeHandler} placeholder="task" />

        <select id='status' onChange={this.changeHandler}>
          <option type='text' className="status" value={1} >In Queue</option>
          <option type='text' className="status" value={2} >In Progress</option>
          <option type='text' className="status" value={3} >Done</option>
        </select>

        <input type='text' id='body' value={body} onChange={this.changeHandler} placeholder="body" />

        <select id='priority_id' onChange={this.changeHandler}>
          <option type='text' className='priority_id' value={1} >Low</option>
          <option type='text' className='priority_id' value={2} >Medium</option>
          <option type='text' className='priority_id' value={3} >High</option>
          <option type='text' className='priority_id' value={4} >Blocker</option>
        </select>

        <select id='created_by' onChange={this.changeHandler}>
          <option type='text' className='created_by' value={1}>Jennifer</option>
          <option type='text' className='created_by' value={2}>Bert</option>
        </select>
        <br />
        <button onClick={this.editCard}>Edit Card</button>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    edittedCard: (card) => {
      console.log('edit map', card)
      dispatch(edittedCard(card));
    }
  }
}

export default connect(null, mapDispatchToProps)(EditCard);

