import eventAggregator from "../utils/eventAggregator";
import Task from "../models/Task";
import TaskManager from "../models/TaskManager";
import renderTask from "../views/taskView";
import ProjectManager from "../models/ProjectManager";

const runTaskScript = () => {
    eventAggregator.subscribe("quickAddTask", (eventArgs) => {
        const task = Task(eventArgs.title, ProjectManager.activeProjectId);
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

        const activeTask = TaskManager.findTaskById(
            TaskManager.getActiveTask()
        );

        document.getElementById("taskProject").textContent =
            ProjectManager.getProject(activeTask.project).name;
        document.getElementById("taskTitleInput").value = activeTask.title;
        document.getElementById("notesTextArea").value = activeTask.description;
        if (activeTask.dueDate) {
            document.getElementById("dateTimePicker").value =
                activeTask.dueDate;
        }
    });

    eventAggregator.subscribe("editTaskRequestCancel", () => {
        const overlay = document.querySelector(".overlay");
        overlay.classList.add("invisible");

        const addTaskModal = document.querySelector(".addTaskModal");
        addTaskModal.classList.add("invisible");
    });

    eventAggregator.subscribe("editTaskSubmit", () => {
        const activeTask = TaskManager.getActiveTask();

        TaskManager.updateTask(
            activeTask,
            "title",
            document.getElementById("taskTitleInput").value
        );
        TaskManager.updateTask(
            activeTask,
            "description",
            document.getElementById("notesTextArea").value
        );

        TaskManager.updateTask(
            activeTask,
            "dueDate",
            document.getElementById("dateTimePicker").value
        );
        renderTask(document.querySelector(".tasksDiv"));
        eventAggregator.publish("editTaskRequestCancel");
    });
};

export default runTaskScript;
