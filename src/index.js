import "./style.css";
import createView from "./views/homePageView";
import Event from "./models/Event";

createView();

const myEvent = Event("example");
console.log(myEvent.name);