
export const AddTask = ({ taskList, setTaskList, task, setTask }) => {
    function handleSubmit(e) {
        e.preventDefault();
        const date = new Date();
        if (task.id) {
            const updateTaskList = taskList.map((todo) => (
                todo.id === task.id
                    ? { ...todo, name: task.name }
                    : todo
            ))
            setTaskList(updateTaskList);
            setTask({})
        } else {

            const newTask = {
                id: date.getTime(),
                name: e.target.task.value,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }
            setTaskList([...taskList, newTask]);
            setTask({})
        }
    }
    return (
        <section className="addTask">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="task"
                    value={task.name || ""}
                    id="task"
                    placeholder="Add Task"
                    autoComplete="off"
                    maxLength="25"
                    onChange={e => setTask({ ...task, name: e.target.value })}
                />
                <button type="submit">{!task.id ? 'Add' : 'Update'}</button>
            </form>
        </section>
    )
}
