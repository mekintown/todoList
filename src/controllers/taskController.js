import eventAggregator from "../utils/eventAggregator";
import Task from "../models/Task";
import TaskManager from "../models/TaskManager";
import renderTask from "../views/taskView";

const runTaskScript = () => {
    eventAggregator.subscribe("quickAddTask", (eventArgs) => {
        const task = Task(eventArgs.title);
        TaskManager.addTask(task);
        TaskManager.sortTasks();
        renderTask(eventArgs.tasksDiv);
    });
};

export default runTaskScript;
