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

    const findTaskIndexById = (id) =>
        _tasks.findIndex((task) => task.id === id);

    const findTaskById = (id) => _tasks[findTaskIndexById(id)];

    const deleteTask = (id) => {
        const taskIndex = findTaskIndexById(id);
        if (taskIndex !== -1) {
            _tasks.splice(taskIndex, 1);
        }
    };

    const updateTask = (id, updateField, updateValue) => {
        _tasks[findTaskIndexById(id)][updateField] = updateValue;
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
        findTaskById,
        updateTask,
    };
})();

export default TaskManager;
