import eventAggregator from "../utils/eventAggregator";
import Project from "../models/Project";
import ProjectManager from "../models/ProjectManager";
import renderProject from "../views/projectView";

const runProjectScript = () => {
    const defaultProject = Project("Home");
    ProjectManager.addProject(defaultProject);

    eventAggregator.subscribe("addProjectRequest", () => {
        const overlay = document.querySelector(".overlay");
        overlay.classList.remove("invisible");
        console.log("yeah");
        const addTaskModal = document.querySelector(".addProjectModal");
        addTaskModal.classList.remove("invisible");
    });

    eventAggregator.subscribe("addProjectRequestCancel", () => {
        const overlay = document.querySelector(".overlay");
        overlay.classList.add("invisible");

        const addTaskModal = document.querySelector(".addProjectModal");
        addTaskModal.classList.add("invisible");
    });
    eventAggregator.subscribe("addProjectSubmit", (eventArgs) => {
        const project = Project(eventArgs.title);
        ProjectManager.addProject(project);
        eventAggregator.publish("addProjectRequestCancel");
        renderProject(document.querySelector(".projectsDiv"));
    });
};

export default runProjectScript;
