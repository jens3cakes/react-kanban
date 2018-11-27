import React, { Component } from 'react';
import { connect } from 'react-redux';
import { edittedCard } from '../../cardAction/action'

class EditCard extends Component {
  constructor(props) {
    super(props);
    console.log('head', this.props.task)
    const task = this.props.task;
    this.state = {
      id:task.id,
      status_id: task.status_id,
      assigned_to: task.assigned_to,
      title: task.title,
      body: task.body,
      priority_id: task.priority_id,
      created_by: task.created_by
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.editCard = this.editCard.bind(this);
  }
  changeHandler(event) {
    console.log('changeHandler', event.target.value)
    //console.log(editFormField)
    switch (event.target.id) {
      case "assigned_to":
        this.setState({ assigned_to: parseInt(event.target.value)});
        break;
      case "task":
        this.setState({ title: event.target.value });
        break;
      case "status":
        this.setState({ status_id: parseInt(event.target.value) });
        break;
      case "body":
        this.setState({ body: event.target.value });
        break;
      case "created_by":
        this.setState({ created_by: parseInt(event.target.value) });
        break;
      case "priority_id":
        this.setState({ priority_id: parseInt(event.target.value) });
        break;
      default:
        break;
    }
  }
  editCard(event) {
    console.log('edit', event)
    event.preventDefault();
    const data = {
      id: parseInt(this.state.id),
      status_id: parseInt(this.state.status_id),
      assigned_to: parseInt(this.state.assigned_to),
      title: this.state.title,
      body: this.state.body,
      priority_id: parseInt(this.state.priority_id),
      created_by: parseInt(this.state.created_by)
    }
    console.log('editActionsend', data)
    this.props.edittedCard(data);
  }

  
  render() {
    console.log('render fail', this.state, this.props)
    const task = this.state;
    return (
      <div className="edit-card-form">
        <input hidden value={task.id} />
        <br />
        <select id="assigned_to" value={task.assigned_to} onChange={this.changeHandler}>
          <option type="text" value={1} >Jennifer</option>
          <option type="text" value={2}>Bert</option>
          <option type="text" value={3}>Lauren</option>
          <option type="text" value={4}>Joshua</option>
          <option type="text" value={5}>Mitchell</option>
        </select>
        <br />
        <input type='text' id="task" value={task.title} onChange={this.changeHandler} placeholder="task" />
        <br />
        <select id='status' value={task.status_id} onChange={this.changeHandler}>
          <option type='text' className="status" value={1} >In Queue</option>
          <option type='text' className="status" value={2} >In Progress</option>
          <option type='text' className="status" value={3} >Done</option>
        </select>
        <br />
        <input type='text' id='body' value={task.body} onChange={this.changeHandler} placeholder="body" />
        <br />
        <select id='priority_id' value={task.priority} onChange={this.changeHandler}>
          <option type='text' className='priority_id' value={3} >Low</option>
          <option type='text' className='priority_id' value={2} >Medium</option>
          <option type='text' className='priority_id' value={1} >High</option>
          <option type='text' className='priority_id' value={0} >Blocker</option>
        </select>
        <br />
        <select id='created_by' value={task.creator} onChange={this.changeHandler}>
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

