import React from 'react';
import Card from '../Card'
import EditCard from '../EditCard'

const Column = (props) => {
  //console.log('column',props)
  const { id, tasks } = props
  const cards = tasks.filter((task) => {
    //console.log('column task',task)
     return task.status_id === id;
  }).map((task) => {
    //console.log('column map', task)
    return <Card task={task} key={task.id} />//</Card>assigned_to={task.assignee.first_name} title={task.title} status_id={task.status.name} priority_id={task.priority.name} body={task.body} />
  })

  return (
    <div className='container'id={props.title}>

      <h2>{props.title}</h2>
      <div>{cards}
      </div>
    </div>
  )

}

export default Column;