import "./style.css";
import createView from "./views/homePageView";
import runTaskScript from "./controllers/taskController";
import runProjectScript from "./controllers/projectController";

runProjectScript();
runTaskScript();
createView();
