const ProjectManager = (() => {
    const _projects = [];

    const addProject = (project) => {
        _projects.push(project);
    };

    const getProject = (id) => _projects.find((project) => project.id === id);

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
    };
})();

export default ProjectManager;
