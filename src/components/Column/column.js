import React from 'react';
import Card from '../Card'

const Column = (props) => {
  console.log('column',props)
  const { status, tasks } = props
  const cards = tasks.filter((task) => {
    return task.status === status
  }).map((task) => {
    return <Card key={task.id} name={task.name} task={task.task} status={task.status} />
  })

  return (
    <div className='container'>
      <h2>{status}</h2>
      <div>{cards}</div>
    </div>
  )

}

export default Column;