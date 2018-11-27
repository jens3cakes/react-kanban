import React from 'react';
import Column from '../Column/'
import { IN_PROGRESS, IN_QUEUE, DONE } from '../constants';
import { EDIT_CARD } from '../../cardAction/action';
import EditCard from '../EditCard';



const Board = (props) => {
  const tasks = props.tasks;
console.log('board', tasks)
  return (
    <div className='bodyDiv'>
      <div className="App-header">
        <h1>React Kanban Board</h1>
      </div>
      <div className='columns'>
        <Column  id={1}  title= {IN_QUEUE} tasks={tasks} />
        <Column  id={2}  title= {IN_PROGRESS} tasks={tasks} />
        <Column  id={3}  title = {DONE} tasks={tasks} />
      </div>
    </div>



  )
}
export default Board;