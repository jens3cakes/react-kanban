import React, { Component } from 'react';
import { connect } from 'react-redux';
import { edittedCard } from '../../cardAction/action'
import {deleteCardRemover} from '../../cardAction/action'

class EditCard extends Component {
  constructor(props) {
    super(props);
    // console.log('head', this.props.task)
    const task = this.props.task;
    this.state = {
      id: task.id,
      status_id: task.status_id,
      assigned_to: task.assigned_to,
      title: task.title,
      body: task.body,
      priority_id: task.priority_id,
      created_by: task.created_by
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.editCard = this.editCard.bind(this);
    this.moveRight = this.moveRight.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
    this.deleteCard = this.deleteCard.bind(this)
  }
  changeHandler(event) {
    // console.log('changeHandler', event.target.value)
    //console.log(editFormField)
    switch (event.target.id) {
      case "assigned_to":
        this.setState({ assigned_to: parseInt(event.target.value) });
        break;
      case "title":
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

deleteCard(event) {
  event.preventDefault();
  const removeThisCard = {...this.state}
  this.props.deleteCardRemover(removeThisCard);
}

  editCard(event) {
    // console.log('edit', event)
    event.preventDefault();
    const data = { ...this.state }
    // console.log('editActionsend', data)
    this.props.edittedCard(data);
  }
  moveRight(event) {
    event.preventDefault();
    const card = { ...this.state }
    //const rightMoveArrowCard = {...this.props.task}
    if (card.status_id) {
      console.log('move arrow', this.state)
      const newCard = {
        id: parseInt(this.state.id),
        title: this.state.title,
        body: this.state.body,
        priority_id: parseInt(this.state.priority_id),
        status_id: parseInt(this.state.status_id += 1),
        created_by: parseInt(this.state.created_by),
        assigned_to: parseInt(this.state.assigned_to)
      }
      this.props.edittedCard(newCard);
    }
  }
  moveLeft(event) {
    event.preventDefault();
    const card = { ...this.state }
    //const rightMoveArrowCard = {...this.props.task}
    if (card.status_id) {
      console.log('move arrow', this.state)
      const newCard = {
        id: parseInt(this.state.id),
        title: this.state.title,
        body: this.state.body,
        priority_id: parseInt(this.state.priority_id),
        status_id: parseInt(this.state.status_id -= 1),
        created_by: parseInt(this.state.created_by),
        assigned_to: parseInt(this.state.assigned_to)
      }
      this.props.edittedCard(newCard);
    }
  }

  render() {
    const { title, assigned_to, status_id, body, priority_id, created_by } = this.state;
    // console.log('render fail', this.state, this.props)

    return (
      <div className="edit-card-form">
        <br />
        <select id="assigned_to" value={assigned_to} onChange={this.changeHandler}>
          <option type="text" value={1} >Jennifer</option>
          <option type="text" value={2}>Bert</option>
          <option type="text" value={3}>Lauren</option>
          <option type="text" value={4}>Joshua</option>
          <option type="text" value={5}>Mitchell</option>
        </select>
        <br />
        <input type='text' id="title" value={title} onChange={this.changeHandler} placeholder="task" />
        <br />
        <select id='status' value={status_id} onChange={this.changeHandler}>
          <option type='text' value="1" >In Queue</option>
          <option type='text' value="2" >In Progress</option>
          <option type='text' value="3" >Done</option>
        </select>
        <br />
        <input type='text' id='body' value={body} onChange={this.changeHandler} placeholder="body" />
        <br />
        <select id='priority_id' value={priority_id} onChange={this.changeHandler}>
          <option type='text' value={3} >Low</option>
          <option type='text' value={2} >Medium</option>
          <option type='text' value={1} >High</option>
          <option type='text' value={0} >Blocker</option>
        </select>
        <br />
        <select id='created_by' value={created_by} onChange={this.changeHandler}>
          <option type='text' value={1}>Jennifer</option>
          <option type='text' value={2}>Bert</option>
        </select>
        <br />
        <button onClick={this.editCard}>Edit Card</button>
        <button onClick={this.deleteCard}>Delete Card</button>
        <div className="moveCard">
          {status_id > 1 && (<button className="directionalButton" id="move_left" onClick={this.moveLeft}>
            <span> <i className="fas fa-angle-left"></i></span>
          </button>)}
          {status_id <= 2 && (<button className="directionalButton" id="move_right" onClick={this.moveRight}>
            <span><i class="fas fa-angle-right"></i></span>
          </button>)}
        </div>
      </div>
    )
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    edittedCard: (card) => {
      // console.log('edit map', card)
      dispatch(edittedCard(card));
    },
    deleteCardRemover: (card) => {
      dispatch(deleteCardRemover(card))
    }
  }
}

export default connect(null, mapDispatchToProps)(EditCard);

