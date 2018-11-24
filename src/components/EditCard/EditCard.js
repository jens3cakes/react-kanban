// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { edittedCard } from '../../cardAction/action'

// // class EditCard extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       status_id: "",
// //       assigned_to: "",
// //       title: "",
// //       body: "",
// //       priority_id: "",
// //       created_by: ""
// //     };
//     this.changeHandler = this.changeHandler.bind(this);
//     this.editCard = this.editCard.bind(this);
//   }
//   changeHandler(event) {
//     switch (event.target.id) {
//       case "assigned_to":
//         return this.setState({ assigned_to: event.target.value });
//       case "task":
//         return this.setState({ title: event.target.value });
//       case "status":
//         return this.setState({ status_id: event.target.value });
//       case "body":
//         return this.setState({ body: event.target.value });
//       case "created_by":
//         return this.setState({ created_by: event.target.value });
//       case "priority_id":
//         return this.setState({ priority_id: event.target.value });
//       default:
//         break;
//     }
//   }
//   editCard(event) {
//     console.log('edit', event)
//     event.preventDefault();
//     const data = {
//       status_id: this.state.status_id,
//       assigned_to: this.state.assigned_to,
//       task: this.state.title,
//       body: this.state.body,
//       priority_id: this.state.priority_id,
//       created_by: this.state.created_by
//     }
//     console.log('edit', data)
//     this.props.edittedCard(data)
//   }
//   render() {
//     const { assigned_to, task, status, body, priority_id, created_by } = this.state;
//     return (
//       <div className="edit-card-form">
//         <input type="text" id="assigned_to" value={assigned_to} onChange={this.changeHandler} placeholder='assigned to' />
//         <input type='text' id="task" value={task} onChange={this.changeHandler} placeholder="task" />
//         <input type='text' id="status" value={status} onChange={this.changeHandler} placeholder="status" />
//         <input type='text' id='body' value={body} onChange={this.changeHandler} placeholder="body" />
//         <input type='text' id='priority_id' value={priority_id} onChange={this.changeHandler} placeholder='priority' />
//         <input type='text' id='created_by' value={created_by} onChange={this.changeHandler} placeholder='created by' />
//         <button onClick={this.editCard}>Edit Card</button>

//       </div>
//     )
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     editCard: (card) => {
//       console.log('edit map', card)
//       dispatch(edittedCard(card));
//     }
//   }
// }
// export default connect(null, mapDispatchToProps)(EditCard);

