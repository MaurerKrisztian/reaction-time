import {Timer} from "./Timer";
import {Statistics} from "./Statistics";
import {ReactionTimeGame} from "./ReactionTimeGame";

const timer = new Timer();
const statistics = new Statistics(document.getElementById("timeStat"))
new ReactionTimeGame(timer, statistics, {
    minTime: 1,
    maxTime: 6,
    startElement: document.getElementById("start"),
    enabledColor: "green",
    deniedColor: "red"
})