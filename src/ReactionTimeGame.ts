import {Timer} from "./Timer";
import {Statistics} from "./Statistics";
import {Modal} from "./Components/Modal/Modal";

export interface IReactionTimeOption {
    minTime: number,
    maxTime: number,
    startElement: HTMLElement;
    deniedColor: string,
    enabledColor: string
}


export class ReactionTimeGame {
    enableTimerStop: boolean = false;

    constructor(private readonly timer: Timer,
                private readonly statistics: Statistics,
                private readonly modal: Modal,
                private readonly options: IReactionTimeOption) {
        this.init()
    }

    init() {
        this.options.startElement.addEventListener("click", () => {
            document.body.style.backgroundColor = this.options.deniedColor;
            const randomTime = this.getRandomBetween(this.options.minTime, this.options.maxTime);

            setTimeout(() => {
                document.body.style.backgroundColor = this.options.enabledColor;
                this.timer.startTimer();
                this.enableTimerStop = true;
            }, randomTime * 1000);

        })

        const spaceKeyCode = 32;
        document.body.onkeydown = (e) => {
            if (e.keyCode === spaceKeyCode && this.enableTimerStop) {
                this.timer.stopTimer();
                this.modal.open("Your time is: <b>" + this.timer.getDiffMs() + "</b> ms.")
                this.statistics.display(this.timer.lastTimes);
                this.enableTimerStop = false;
            } else if (e.keyCode === spaceKeyCode && !this.enableTimerStop) {
                // invalidate();
            }
        }
    }

    getRandomBetween(min: number, max: number): number {
        return Math.random() * (max - min) + min;
    }
}