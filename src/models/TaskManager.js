import { isToday, compareAsc } from "date-fns";

const TaskManager = () => {
    const _tasks = [];

    const addTask = (task) => {
        _tasks.push(task);
    };

    const getTasks = () => _tasks;

    const sortTasks = () => {
        _tasks.sort((a, b) => compareAsc(a.dueDate, b.dueDate));
    };

    const getTodayTasks = () => _tasks.filter((task) => isToday(task.dueDate));

    return {
        addTask,
        getTasks,
        sortTasks,
        getTodayTasks,
    };
};

export default TaskManager;
