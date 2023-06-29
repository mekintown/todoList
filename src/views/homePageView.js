import {
    timeNow,
    generateGreetingMessage,
} from "../controllers/projectController";
import voidImageSrc from "../assets/img/void.svg";
import todayIconSrc from "../assets/img/todayIcon.svg";
import addTaskIconSrc from "../assets/img/up.svg";
import allTaskIconSrc from "../assets/img/allTaskIcon.svg";
import eventAggregator from "../utils/eventAggregator";
import renderTask from "./taskView";

import "../style.css";

function createSidebar() {
    const sidebar = document.createElement("section");
    sidebar.className =
        "flex flex-col items-start gap-10 py-5 h-screen sticky top-0";

    const logoHeading = document.createElement("h3");
    logoHeading.textContent = "TodoList";
    logoHeading.className = "font-medium text-2xl mx-auto";
    sidebar.appendChild(logoHeading);

    const nav = document.createElement("nav");
    nav.className = "self-stretch";
    const ul = document.createElement("ul");
    ul.className = "flex flex-col items-start gap-5";

    const todayDiv = document.createElement("div");
    todayDiv.className =
        "flex self-stretch flex-1 cursor-pointer py-3 px-5 gap-2  hover:bg-gray-200";

    const todayIcon = new Image();
    todayIcon.src = todayIconSrc;
    todayDiv.appendChild(todayIcon);

    const todayLi = document.createElement("li");
    todayLi.textContent = "Today";
    todayDiv.appendChild(todayLi);

    ul.appendChild(todayDiv);

    const allTaskDiv = document.createElement("div");
    allTaskDiv.className =
        "flex self-stretch flex-1 cursor-pointer py-3 px-5 gap-2  hover:bg-gray-200";

    const allTaskIcon = new Image();
    allTaskIcon.src = allTaskIconSrc;
    allTaskDiv.appendChild(allTaskIcon);

    const allTaskLi = document.createElement("li");
    allTaskLi.textContent = "All Tasks";
    allTaskDiv.appendChild(allTaskLi);

    ul.appendChild(allTaskDiv);

    nav.appendChild(ul);
    sidebar.appendChild(nav);

    const projectSection = document.createElement("section");
    projectSection.className = "flex self-stretch";

    const projectSectionHeader = document.createElement("header");
    projectSectionHeader.className =
        "flex flex-1 items-center justify-between cursor-pointer py-3 px-5  hover:bg-gray-200";

    const myProjectHeading = document.createElement("h3");
    myProjectHeading.textContent = "My Projects";
    myProjectHeading.className = "font-medium";
    projectSectionHeader.appendChild(myProjectHeading);

    const addProjectButton = document.createElement("button");
    addProjectButton.textContent = "+";
    addProjectButton.className = "font-medium text-gray-500";
    projectSectionHeader.appendChild(addProjectButton);

    projectSection.appendChild(projectSectionHeader);

    const projectNav = document.createElement("nav");

    const projectUl = document.createElement("ul");
    projectNav.appendChild(projectUl);
    projectSection.appendChild(projectNav);

    sidebar.appendChild(projectSection);

    return sidebar;
}

function createNothingPlaceHolder() {
    const nothingDiv = document.createElement("div");
    nothingDiv.className = "flex flex-col items-center  gap-5";

    const voidImage = new Image();
    voidImage.src = voidImageSrc;
    voidImage.className = "w-72 md:w-80 lg:w-96 my-12 mx-auto";
    nothingDiv.appendChild(voidImage);

    return nothingDiv;
}

function createAddTaskSection() {
    const addTaskSection = document.createElement("section");
    addTaskSection.className =
        "flex flex-1 gap-2 p-2 rounded shadow-lg relative";
    addTaskSection.tabIndex = 0;

    const addIcon = document.createElement("div");
    addIcon.textContent = "+";
    addIcon.className =
        "font-medium text-gray-500 absolute inset-y-0 left-4 flex items-center pl-2";
    addTaskSection.appendChild(addIcon);

    const addTaskInput = document.createElement("input");
    addTaskInput.type = "text";
    addTaskInput.placeholder = "Add Task";
    addTaskInput.className =
        "flex-1 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm";
    addTaskInput.addEventListener("keydown", (event) => {
        if (event.code === "Enter") {
            eventAggregator.publish("quickAddTask", {
                title: event.target.value,
                tasksDiv: document.querySelector(".tasksDiv"),
            });
            console.log("Add Task Published");
        }
    });

    addTaskSection.appendChild(addTaskInput);

    const addTaskIcon = new Image();
    addTaskIcon.src = addTaskIconSrc;
    addTaskIcon.className =
        "font-medium text-gray-500 absolute inset-y-0 top-3 right-4 flex items-center pl-2 cursor-pointer";
    addTaskSection.appendChild(addTaskIcon);

    return addTaskSection;
}

function createToDoSection() {
    const section = document.createElement("section");
    section.className = "col-span-4 flex  flex-col m-10";
    const header = document.createElement("header");
    header.className = "flex p-5 gap-5";
    const [day, date, month] = timeNow();
    const timeDiv = document.createElement("div");
    timeDiv.className = "flex flex-col justify-center items-center gap-1";
    const dateHeading = document.createElement("h5");
    dateHeading.textContent = date;
    dateHeading.className = "font-bold text-3xl -mt-3 -mb-3";

    const dayHeading = document.createElement("h3");
    dayHeading.textContent = day;
    dayHeading.className = "font-medium text-lg text-gray-500";

    const monthHeading = document.createElement("h4");
    monthHeading.textContent = month;
    monthHeading.className = "font-small text-base text-gray-400";

    timeDiv.appendChild(dayHeading);
    timeDiv.appendChild(dateHeading);
    timeDiv.appendChild(monthHeading);
    header.appendChild(timeDiv);

    const heroTextDiv = document.createElement("div");
    const heading = document.createElement("h2");
    heading.textContent = generateGreetingMessage();
    heading.className = "text-2xl";
    heroTextDiv.appendChild(heading);

    const heroParagraph = document.createElement("p");
    heroParagraph.textContent = "Stay organized, get things done.";
    heroTextDiv.appendChild(heroParagraph);

    header.appendChild(heroTextDiv);

    section.appendChild(header);

    const toDoListSection = document.createElement("section");
    toDoListSection.className = "flex flex-col gap-5";

    const tasks = document.createElement("div");
    tasks.className = "tasksDiv flex flex-col gap-2";
    renderTask(tasks);

    toDoListSection.appendChild(tasks);

    toDoListSection.appendChild(createAddTaskSection());

    toDoListSection.appendChild(createNothingPlaceHolder());

    section.appendChild(toDoListSection);

    return section;
}

function createView() {
    const body = document.querySelector("body");
    body.className = "grid grid-cols-5 w-full";
    body.appendChild(createSidebar());
    body.appendChild(createToDoSection());
}

export default createView;
