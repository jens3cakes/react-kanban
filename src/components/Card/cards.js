import React from 'react';
import EditCard from '../EditCard/index'

const Card = (props) => {
  console.log('card.js', props)
  const { title, body, priority_id, status_id, created_by, assigned_to } = props;
  
  return (
    <div>
      <div className='card'>
        <br />
        {status_id}<br />
        {priority_id}<br />
        {assigned_to}<br />
        {title}<br />
        {body}<br />
        {created_by}< br />
      </div>
    </div>
  )
};


export default Card;