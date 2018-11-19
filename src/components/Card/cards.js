import React from 'react';


const Card = (props) => {
  const {name, task, status} = props;
    return (
      <div className='card'>
        <ul>
          <li>{name}</li>
          <li>{task}</li>
          <li>{status}</li>
        </ul>
      </div>
    )
};


export default Card;