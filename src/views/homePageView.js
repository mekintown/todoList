import timeNow from "../controllers/projectController";
import voidImageSrc from "../assets/img/void.svg";
import todayIconSrc from "../assets/img/todayIcon.svg";
import allTaskIconSrc from "../assets/img/allTaskIcon.svg";

import "../style.css";

function createSidebar() {
    const body = document.querySelector("body");
    const sidebar = document.createElement("section");
    sidebar.className = "flex flex-col items-start gap-10 py-5"

    const logoHeading = document.createElement("h3");
    logoHeading.textContent = "TodoList"
    logoHeading.className = "font-medium text-2xl mx-auto"
    sidebar.appendChild(logoHeading);

    const nav = document.createElement("nav");
    nav.className = "self-stretch";
    const ul = document.createElement("ul");
    ul.className = "flex flex-col items-start gap-5";

    const todayDiv = document.createElement("div");
    todayDiv.className = "flex self-stretch flex-1 cursor-pointer py-3 px-5 gap-2  hover:bg-gray-200";
    
    const todayIcon = new Image();
    todayIcon.src = todayIconSrc;
    todayDiv.appendChild(todayIcon);
    
    const todayLi = document.createElement("li");
    todayLi.textContent = "Today";
    todayDiv.appendChild(todayLi);


    ul.appendChild(todayDiv);

    const allTaskDiv = document.createElement("div");
    allTaskDiv.className = "flex self-stretch flex-1 cursor-pointer py-3 px-5 gap-2  hover:bg-gray-200";

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
    projectSectionHeader.className = "flex flex-1 items-center justify-between cursor-pointer py-3 px-5  hover:bg-gray-200";

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

    body.appendChild(sidebar);

}

function createToDoSection() {
    const body = document.querySelector("body");

    const section = document.createElement("section");
    section.className = "col-span-4 flex  flex-col";
    const header = document.createElement("header");
    header.className = "flex p-5 gap-5 items-center  bg-blue-500 rounded m-5"
    const [day, date, month] = timeNow();
    const timeDiv = document.createElement("div");
    timeDiv.className = "flex flex-col justify-center items-center gap-1"
    const dateHeading = document.createElement("h5");
    dateHeading.textContent = date
    dateHeading.className = "font-bold text-3xl -mt-3 -mb-3"

    const dayHeading = document.createElement("h3");
    dayHeading.textContent = day;

    const monthHeading = document.createElement("h4");
    monthHeading.textContent = month;

    timeDiv.appendChild(dayHeading);
    timeDiv.appendChild(dateHeading);
    timeDiv.appendChild(monthHeading);
    header.appendChild(timeDiv)

    const heading = document.createElement("h2");
    heading.textContent = "Today you have ... tasks";
    heading.className = "text-2xl"
    header.appendChild(heading);

    section.appendChild(header);


    const toDoListSection = document.createElement("section");

    const addTaskButton = document.createElement("button");
    addTaskButton.textContent = "+ Add Task";
    toDoListSection.appendChild(addTaskButton);

    const voidImage = new Image();
    voidImage.src = voidImageSrc;
    voidImage.className = "w-72 md:w-80 lg:w-96";
    toDoListSection.appendChild(voidImage);

    const nothingHeading = document.createElement("h3");
    nothingHeading.textContent = "Nothing Here..."
    nothingHeading.className = "text-3xl"
    toDoListSection.appendChild(nothingHeading);

    section.appendChild(toDoListSection);

    body.appendChild(section);
    
}

function createView() {
    const body = document.querySelector("body");
    body.className="grid grid-cols-5 w-full";
    createSidebar();
    createToDoSection();
}

export default createView;