import timeNow from "../controllers/projectController";

function createSidebar() {
    const body = document.querySelector("body");

    const nav = document.createElement("nav");
    const ul = document.createElement("ul");

    const todayLi = document.createElement("li");
    todayLi.textContent = "Today";
    ul.appendChild(todayLi);

    const allTasksLi = document.createElement("li");
    allTasksLi.textContent = "All Tasks";
    ul.appendChild(allTasksLi);

    nav.appendChild(ul);
    body.append(nav);

    const projectSection = document.createElement("section");

    const myProjectHeading = document.createElement("h3");
    myProjectHeading.textContent = "My Projects"
    projectSection.appendChild(myProjectHeading);

    const projectNav = document.createElement("nav");

    const projectUl = document.createElement("ul");
    projectNav.appendChild(projectUl);
    projectSection.appendChild(projectNav);

    body.appendChild(projectSection);

}

function createToDoSection() {
    const body = document.querySelector("body");

    const section = document.createElement("section");
    
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

    section.appendChild(timeDiv);
    body.appendChild(section);
    
}

function createView() {
    createSidebar();
    createToDoSection();
}

export default createView;