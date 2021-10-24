export class Statistics {
    constructor(private readonly statisticsElement: HTMLElement) {
    }

    display(timesMs: number[]) {
        let stats = "";
        for (let i = 0; i < timesMs.length; i++) {
            stats += this.getTimeHtml(timesMs[i])
        }
        this.statisticsElement.innerHTML = `Your times: ${stats} <p>AVG: ${this.avg(timesMs)} ms</p> <p>Best time: ${this.getMin(timesMs)} ms</p>`
    }

    getTimeHtml(time: number) {
        return `<span class='time'>${time} ms, </span>`
    }

    avg(numbers: number[]) {
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i]
        }
        return sum / numbers.length;
    }

    getMin(numbers: number[]) {
        let min = numbers[0]
        for (let i = 0; i < numbers.length; i++) {
            if (min > numbers[i]) {
                min = numbers[i]
            }
        }
        return min
    }
}