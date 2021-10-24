import "./Components/StyleImports"

import {Timer} from "./Timer";
import {Statistics} from "./Statistics";
import {ReactionTimeGame} from "./ReactionTimeGame";
import {Modal} from "./Components/Modal/Modal";


const modal = new Modal()
const timer = new Timer();
const statistics = new Statistics(document.getElementById("timeStat"))
new ReactionTimeGame(timer, statistics, modal, {
    minTime: 1,
    maxTime: 6,
    startElement: document.getElementById("start"),
    enabledColor: "green",
    deniedColor: "red"
})
