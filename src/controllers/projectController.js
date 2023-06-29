import eventAggregator from "../utils/eventAggregator";
import Project from "../models/Project";
import ProjectManager from "../models/ProjectManager";
import renderProject from "../views/projectView";

const runProjectScript = () => {
    eventAggregator.subscribe("addProject", (eventArgs) => {
        const task = Project(eventArgs.title);
        ProjectManager.addTask(task);
        renderProject(eventArgs.projectsDiv);
    });
};

export default runProjectScript;
