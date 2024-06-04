import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';

const Column = ({ column, tasks }) => {
  return (
    <div style={{ margin: 8, border: '1px solid lightgrey', borderRadius: 2 }}>
      <h3 style={{ padding: 8 }}>{column.title}</h3>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{ padding: 8, minHeight: 100 }}
          >
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
