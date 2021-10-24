export class Timer {
    start: Date;
    end: Date;

    lastTimes: number[] = []

    startTimer() {
        this.start = new Date();
    }

    stopTimer() {
        this.end = new Date()
        this.addTime(this.getDiffMs())
    }

    getDiffMs(): number {
        return this.end.getTime() - this.start.getTime()
    }

    addTime(timeInMs) {
        this.lastTimes.push(timeInMs);
    }
}
