import TaskManager from "../models/TaskManager";
import greenCircleSrc from "../assets/img/greenCircle.svg";
import trashSrc from "../assets/img/trash.svg";

function renderTask(tasks) {
    tasks.textContent = "";

    TaskManager.tasks.forEach((task) => {
        const taskDiv = document.createElement("div");
        taskDiv.className =
            "flex justify-between self-stretch items-center rounded bg-gray-50 shadow-lg p-3";

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
        rightTask.className = "flex justify-between gap-2";

        const dueDate = document.createElement("h3");
        dueDate.className = "text-slate-400 text-sm font-medium";
        if (task.dueDate === null) {
            dueDate.textContent = "no due date";
        }
        rightTask.appendChild(dueDate);

        const closeButton = new Image();
        closeButton.src = trashSrc;
        closeButton.className = "w-4 text-slate-400 cursor-pointer";
        rightTask.appendChild(closeButton);

        taskDiv.appendChild(rightTask);

        tasks.appendChild(taskDiv);
    });
}

export default renderTask;
