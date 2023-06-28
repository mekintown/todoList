import timeNow from "../controllers/projectController";
import voidImageSrc from "../assets/img/void.svg";
import "../style.css";

function createSidebar() {
    const body = document.querySelector("body");
    const sidebar = document.createElement("section");
    sidebar.className = "flex flex-col items-start gap-5 p-5"

    const logoHeading = document.createElement("h3");
    logoHeading.textContent = "TodoList"
    logoHeading.className = "font-medium text-2xl"
    sidebar.appendChild(logoHeading);

    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    ul.className = "flex flex-col items-start gap-5";

    const todayLi = document.createElement("li");
    todayLi.textContent = "Today";
    ul.appendChild(todayLi);

    const allTasksLi = document.createElement("li");
    allTasksLi.textContent = "All Tasks";
    ul.appendChild(allTasksLi);

    nav.appendChild(ul);
    sidebar.appendChild(nav);

    const projectSection = document.createElement("section");

    const projectSectionHeader = document.createElement("header");

    const myProjectHeading = document.createElement("h3");
    myProjectHeading.textContent = "My Projects";
    myProjectHeading.className = "font-medium"
    projectSectionHeader.appendChild(myProjectHeading);

    const addProjectButton = document.createElement("button");
    addProjectButton.textContent = "+";
    addProjectButton.className = "font-medium text-gray-500";
    myProjectHeading.appendChild(addProjectButton);
    
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
    section.className = "col-span-3";
    const header = document.createElement("header");
    const [day, date, month] = timeNow();
    const timeDiv = document.createElement("div");

    const dateHeading = document.createElement("h5");
    dateHeading.textContent = date

    const dayHeading = document.createElement("h3");
    dayHeading.textContent = day;

    const monthHeading = document.createElement("h4");
    monthHeading.textContent = month;

    timeDiv.appendChild(dateHeading);
    timeDiv.appendChild(dayHeading);
    timeDiv.appendChild(monthHeading);
    header.appendChild(timeDiv)

    const heading = document.createElement("h2");
    heading.textContent = "Today";
    heading.className = "text-4xl text-blue-700"
    header.appendChild(heading);

    section.appendChild(header);


    const toDoListSection = document.createElement("section");

    const addTaskButton = document.createElement("button");
    addTaskButton.textContent = "+ Add Task";
    toDoListSection.appendChild(addTaskButton);

    const voidImage = new Image();
    voidImage.src = voidImageSrc;
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
    body.className="container grid grid-cols-4 w-full";
    createSidebar();
    createToDoSection();
}

export default createView;