import eventAggregator from "../utils/eventAggregator";
import Project from "../models/Project";
import ProjectManager from "../models/ProjectManager";
import renderProject from "../views/projectView";

const runProjectScript = () => {
    const defaultProject = Project("Home");
    ProjectManager.addProject(defaultProject);

    eventAggregator.subscribe("addProject", (eventArgs) => {
        const project = Project(eventArgs.title);
        ProjectManager.addProject(project);
        renderProject(eventArgs.projectsDiv);
    });
};

export default runProjectScript;
