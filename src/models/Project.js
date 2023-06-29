let projectId = 0;

const Project = (name = "") => {
    let _name = name;
    const _id = projectId++;
    let _element = null;

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
        get element() {
            return _element;
        },
        set element(value) {
            _element = value;
        },
    };
};

export default Project;
