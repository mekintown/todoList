import { isToday, compareAsc } from "date-fns";

const TaskManager = (() => {
    const _tasks = [];
    let _activeTask = null;

    const addTask = (task) => {
        _tasks.push(task);
    };

    const sortTasks = () => {
        _tasks.sort((a, b) => compareAsc(a.dueDate, b.dueDate));
    };

    const deleteTask = (id) => {
        const taskIndex = _tasks.findIndex((task) => task.id === id);
        if (taskIndex !== -1) {
            _tasks.splice(taskIndex, 1);
        }
    };

    const getTodayTasks = () => _tasks.filter((task) => isToday(task.dueDate));

    const setActiveTask = (task) => {
        _activeTask = task;
    };
    const getActiveTask = () => _activeTask;

    return {
        addTask,
        get tasks() {
            return _tasks;
        },
        sortTasks,
        getTodayTasks,
        deleteTask,
        setActiveTask,
        getActiveTask,
    };
})();

export default TaskManager;
