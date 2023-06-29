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
        project.element = projectDiv;

        projectDiv.className =
            "flex self-stretch flex-1 cursor-pointer py-3 px-5 gap-2  hover:bg-gray-200";

        projectDiv.addEventListener("click", () => {
            ProjectManager.activeProjectId = project.id;
        });

        if (project.id === ProjectManager.activeProjectId) {
            projectDiv.classList.add("bg-green-200");
        }

        const homeIcon = new Image();
        homeIcon.src = homeSrc;
        projectDiv.appendChild(homeIcon);

        const projectLi = document.createElement("li");

        projectLi.textContent = project.name;
        projectDiv.appendChild(projectLi);

        ul.appendChild(projectDiv);
    });

    nav.appendChild(ul);
    projectsDiv.appendChild(nav);
}

export default renderProject;
