import React from 'react'

export const ShowTask = ({ taskList, setTaskList, task, setTask }) => {
    function handleDelete(id) {
        const updateTaskList = taskList.filter((task) => task.id !== id)
        setTaskList(updateTaskList)
    }
    function handleEdit(id) {
        const selectedTask = taskList.find((task) => task.id === id);
        setTask(selectedTask)
    }

    return (
        <section className="showTask">
            <div className="head">
                <div>
                    <span className="title">ToDo</span>
                    <span className="count">{taskList.length}</span>
                </div>
                <button className="clearAll" onClick={() => setTaskList([])}>Clear all</button>
            </div>
            <ul>
                {taskList.map((task) => (
                    <li key={task.id}>
                        <p>
                            <span className="name">{task.name}</span>
                            <span className="time">{task.time}</span>
                        </p>
                        <i onClick={() => handleEdit(task.id)} className="bi bi-pencil-square"></i>
                        <i onClick={() => handleDelete(task.id)} className="bi bi-trash"></i>
                    </li>
                ))}
            </ul>
        </section>
    )
}
