export class Statistics {
    constructor(private readonly statisticsElement: HTMLElement) {
    }

    display(timesMs: number[]) {
        this.statisticsElement.innerText = JSON.stringify(timesMs) + " avg: " + this.avg(timesMs)
    }

    avg(numbers: number[]) {
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i]
        }
        return sum / numbers.length;
    }
}