import React from 'react';
import EditCard from '../EditCard'
//import { connect } from 'react-redux';
// import {deleteCard} from "../../cardAction/action"

const Card = (props) => {
  console.log('card.js', props.task)
  const { title, body, priority, status, creator, assignee } = props.task;

  return (
    <div className='card'>
      <br />
      {status.name}<br />
      {priority.name}<br />
      {assignee.first_name}<br />
      {title}<br />
      {body}<br />
      {creator.name}< br />
      <EditCard task={props.task} />
    </div>
  )
}
 

export default Card;