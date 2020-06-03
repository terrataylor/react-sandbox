import React from 'react';
import Task from './Task';


class TaskList extends React.Component {
    state = {
        tasks: [
            { id: 0, text: 'Learn React', complete: false },
            { id: 1, text: '???', complete: false },
            { id: 2, text: 'Profit', complete: false }
        ]
    };

    completeTask = (id) => { // Note: Arrow function
        // This needs calling when a <Task /> is clicked
        this.setState({
            tasks: this.state.tasks.map(
                task => task.id === id ? { ...task, complete: true } : task
            )
        });
    };

    render() {
        const tasks = this.state.tasks.map(task =>
            <Task
                key={task.id} id={task.id}
                text={task.text} complete={task.complete}
            /> // Callback prop!
        );

        return (
            <div><h1>My Task List</h1>{tasks}</div>
        )
    }
}


export default TaskList;