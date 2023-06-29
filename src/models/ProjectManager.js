const ProjectManager = (() => {
    const _projects = [];
    let _activeProjectId = 0; // Default Project Is Home

    const addProject = (project) => {
        _projects.push(project);
    };

    const getProject = (id) => {
        const i = _projects.find((project) => project.id === id);
        return i;
    };

    const removeProject = (id) => {
        const index = _projects.findIndex((project) => project.id === id);
        if (index !== -1) {
            _projects.splice(index, 1);
        }
    };

    return {
        addProject,
        getProject,
        removeProject,
        get projects() {
            return _projects;
        },
        set projects(newProjects) {
            _projects.length = 0;
            _projects.push(...newProjects);
        },
        get activeProjectId() {
            return _activeProjectId;
        },
        set activeProjectId(projectId) {
            this.getProject(_activeProjectId).element.classList.remove(
                "bg-green-200"
            );
            _activeProjectId = projectId;
            console.log(this.getProject(_activeProjectId));
            this.getProject(_activeProjectId).element.classList.add(
                "bg-green-200"
            );
        },
    };
})();

export default ProjectManager;
