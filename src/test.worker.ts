import { parentPort, workerData } from 'worker_threads';

parentPort?.postMessage('GOT:' + JSON.stringify(workerData));
