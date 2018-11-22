import React from 'react';


const Card = (props) => {
  const {name, task, status, type} = props;
    return (
      <div className='card'>
        <div>
          <br />
          {name}<br />
          {task}<br />
          {status}<br />
          {type}< br/>
          </div>
      </div>
    )
};


export default Card;