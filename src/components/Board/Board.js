import React from 'react';
import Column from '../Column/'
import {IN_PROGRESS, IN_QUEQUE, DONE} from '../constants';



const Board = (props) => {
  const tasks = props.tasks;
  console.log('board',props.tasks)
  
  return (
    <div className="App-header">
      <h1>React Kanban Board</h1>
      <Column status={IN_QUEQUE} tasks={tasks}/>
      <Column status={IN_PROGRESS} tasks={tasks}/>
      <Column status={DONE} tasks={tasks}/>
    </div>

  
  )
  }
export default Board;