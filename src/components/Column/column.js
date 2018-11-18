import React, { Component } from 'react';
import Card from '../Card'

const Column = (props) => {
  const tasks = props.tasks.tasks;
  const cards = tasks.filter((obj) => {
    if (obj.status === props.title) {
      return true
    }
  }).map((task) => {
    return <Card name={task.name} task={task.task} status={task.status} />
  })

  return (
    <div className='container'>
      <h2>{props.title}</h2>
      <div>{cards}</div>
    </div>
  )

}

export default Column;