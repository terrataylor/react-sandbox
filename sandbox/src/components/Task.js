import React from 'react';



function Task(props) {
    return (
        <div
            className="task"
            onClick={() => {
                // How do I call completeTask in <TaskList />?
            }}>
            {props.text}
        </div>
    );
}


export default Task;