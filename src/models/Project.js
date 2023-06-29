let projectId = 0;

const Project = (name = "") => {
    let _name = name;
    const _id = projectId++;

    return {
        get name() {
            return _name;
        },
        set name(value) {
            _name = value;
        },
        get id() {
            return _id;
        },
    };
};

export default Project;
