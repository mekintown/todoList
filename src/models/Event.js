const Event = ((name) => {
  const _handlers = [];
  let _name = name;

  const addHandler = (handler) => {
    _handlers.push(handler);
  };

  const removeHandler = (handler) => {
    for (let i = 0; i < _handlers.length; i += 1) {
      if (handler === _handlers[i]) {
        _handlers.splice(i, 1);
        break;
      }
    }
  };

  const fire = (eventArgs) => {
    _handlers.forEach((handler) => {
      handler(eventArgs);
    });
  };

  return {
    get name() {
      return _name;
    },
    set name(value) {
      _name = value;
    },
    addHandler,
    removeHandler,
    fire,
  };
});

export default Event;
