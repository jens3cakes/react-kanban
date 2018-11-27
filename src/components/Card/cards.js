import React from 'react';
import EditCard from '../EditCard'

const Card = (props) => {
  console.log('card.js', props.task)
  const {id,title, body, priority, status, creator, assignee } = props.task;
  
  return (
    <div>
      <div className='card'>
        <br />
        <input hidden value={id}/><br />
        {status.name}<br />
        {priority.name}<br />
        {assignee.first_name}<br />
        {title}<br />
        {body}<br />
        {creator.name}< br />
        {/* <button onClick={this.editCard}>Edit Card</button> */}
     <EditCard task={props.task}/>
      </div>
    </div>
  )
}

 export default Card;