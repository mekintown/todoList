import TaskManager from "../models/TaskManager";
import greenCircleSrc from "../assets/img/greenCircle.svg";
import trashSrc from "../assets/img/trash.svg";
import eventAggregator from "../utils/eventAggregator";
import ProjectManager from "../models/ProjectManager";

function renderTask(tasks) {
    tasks.textContent = "";

    TaskManager.tasks.forEach((task) => {
        if (task.project !== ProjectManager.activeProjectId) {
            return;
        }
        const taskDiv = document.createElement("div");
        taskDiv.id = `task-${task.id}`;
        taskDiv.className =
            "flex justify-between self-stretch items-center rounded bg-white shadow-lg p-3 cursor-pointer hover:bg-gray-50";

        taskDiv.addEventListener("click", () => {
            TaskManager.setActiveTask(task.id);
            eventAggregator.publish("editTaskRequest", { taskId: task.id });
        });

        const leftTask = document.createElement("div");
        leftTask.className = "flex justify-between gap-2";
        const circleImg = new Image();
        if (task.priority === 0) {
            circleImg.src = greenCircleSrc;
        }
        circleImg.className = "w-3";
        leftTask.appendChild(circleImg);

        const taskTitle = document.createElement("h3");
        taskTitle.textContent = task.title;

        leftTask.appendChild(taskTitle);
        taskDiv.appendChild(leftTask);

        const rightTask = document.createElement("div");
        rightTask.className = "flex items-center justify-between gap-2";

        const dueDate = document.createElement("h3");
        dueDate.className = "text-slate-400 text-sm font-medium";
        if (task.dueDate === null || task.dueDate === "") {
            dueDate.textContent = "no due date";
        } else {
            dueDate.textContent = task.dueDate;
        }
        rightTask.appendChild(dueDate);

        const closeButton = new Image();
        closeButton.src = trashSrc;
        closeButton.className =
            "w-6 text-slate-400 cursor-pointer hover:animate-shake";
        closeButton.addEventListener("click", () => {
            event.stopPropagation();
            eventAggregator.publish("deleteTask", { taskId: task.id });
        });
        rightTask.appendChild(closeButton);

        taskDiv.appendChild(rightTask);

        tasks.appendChild(taskDiv);
    });
}

export default renderTask;
