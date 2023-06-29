const Task = (title = "", description = "", dueDate = null, priority = 0) => {
    let _title = title;
    let _description = description;
    let _dueDate = dueDate;
    let _priority = priority;

    return {
        get title() {
            return _title;
        },
        set title(value) {
            _title = value;
        },
        get description() {
            return _description;
        },
        set description(value) {
            _description = value;
        },
        get dueDate() {
            return _dueDate;
        },
        set dueDate(value) {
            _dueDate = value;
        },
        get priority() {
            return _priority;
        },
        set priority(value) {
            _priority = value;
        },
    };
};

// Usage:
const myTask = Task("Test Task", "A task to test", new Date(), 1);
console.log(myTask.title); // "Test Task"
myTask.title = "Updated Task";
console.log(myTask.title); // "Updated Task"
