import ProjectManager from "../models/ProjectManager";
import homeSrc from "../assets/img/home.svg";

function renderProject(projectsDiv) {
    projectsDiv.textContent = "";

    const nav = document.createElement("nav");
    nav.className = "self-stretch";

    const ul = document.createElement("ul");
    ul.className = "flex flex-col items-start gap-5";

    ProjectManager.projects.forEach((project) => {
        const projectDiv = document.createElement("div");
        projectDiv.className =
            "flex self-stretch flex-1 cursor-pointer py-3 px-5 gap-2  hover:bg-gray-200";

        const homeIcon = new Image();
        homeIcon.src = homeSrc;
        projectDiv.appendChild(homeIcon);

        const todayLi = document.createElement("li");
        todayLi.textContent = project.name;
        projectDiv.appendChild(todayLi);

        ul.appendChild(projectDiv);
    });

    nav.appendChild(ul);
    projectsDiv.appendChild(nav);
}
