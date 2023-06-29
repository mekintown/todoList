import Event from "../models/Event";

const eventAggregator = () => {
  const events = [];

  const getEvent = (eventName) => {
    for (let i = 0; i < events.length; i += 1) {
      if (eventName === events[i].name) {
        return events[i];
      }
    }
    return null;
  };

  const publish = (eventName, eventArgs) => {
    let event = getEvent(eventName);

    if (!event) {
      event = Event(eventName);
      events.push(event);
    }

    event.fire(eventArgs);
  };

  const subscribe = (eventName, handler) => {
    let event = getEvent(eventName);

    if (!event) {
      event = Event(eventName);
      events.push(event);
    }

    event.addHandler(handler);
  };

  return { publish, subscribe };
};

export default eventAggregator;
