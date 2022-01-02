class Process {
    id = undefined
    arrivalTime = undefined
    burstTime = undefined
    waitingTime = undefined
    turnAroundTime = undefined

    startTime = undefined;
    endTime = undefined;
    
    constructor(id, arrivalTime, burstTime) {
        this.id = id;
        this.arrivalTime = arrivalTime;
        this.burstTime = burstTime;
    }
}

let p1 = new Process("A", 5, 12); 
let p2 = new Process("B", 0, 3); 
let p3 = new Process("C", 2, 6); 
let p4 = new Process("D", 3, 3); 
let p5 = new Process("E", 5, 7); 
let p6 = new Process("F", 6, 2); 

let processes = [p1, p2, p3, p4, p5, p6]
console.table(processes);

function FirstComeFirstServe(processes) {

    // Compares two processes arrival time
    function compare(p1, p2) {
        if (p1.arrivalTime < p2.arrivalTime) {
          return -1;
        }
        if (p1.arrivalTime > p2.arrivalTime) {
          return 1;
        }
        // p1 must have come at the same time as p2
        return 0;
    }

    let readyQueue = processes.sort(compare);

    readyQueue[0].startTime = 0
    readyQueue[0].endTime = readyQueue[0].startTime + readyQueue[0].burstTime;
    readyQueue[0].waitingTime = 0
    readyQueue[0].turnAroundTime = readyQueue[0].waitingTime + readyQueue[0].burstTime;
    for (let index = 1; index < readyQueue.length; index++) {
        const process = readyQueue[index];
        
        process.startTime = readyQueue[index - 1].endTime;
        process.endTime = process.startTime + process.burstTime;
        process.waitingTime = process.startTime - process.arrivalTime;
        process.turnAroundTime = process.waitingTime + process.burstTime;
    }   
}

FirstComeFirstServe(processes);
console.table(processes)


