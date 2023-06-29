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
    eventAggregator.subscribe("deleteTask", (eventArgs) => {
        const taskElement = document.getElementById(`task-${eventArgs.taskId}`);
        taskElement.parentElement.removeChild(taskElement);
        TaskManager.deleteTask(eventArgs.taskId);
    });

    eventAggregator.subscribe("editTaskRequest", () => {
        const overlay = document.querySelector(".overlay");
        overlay.classList.remove("invisible");

        const addTaskModal = document.querySelector(".addTaskModal");
        addTaskModal.classList.remove("invisible");
    });

    eventAggregator.subscribe("editTaskRequestCancel", () => {
        const overlay = document.querySelector(".overlay");
        overlay.classList.add("invisible");

        const addTaskModal = document.querySelector(".addTaskModal");
        addTaskModal.classList.add("invisible");
    });
};

export default runTaskScript;
