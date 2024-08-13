import { Worker } from 'worker_threads';

const worker = new Worker(new URL('./test.worker.ts', import.meta.url), {
  workerData: { title: 'this-is-the-title' },
});

worker.on('message', (result: string) => {
  console.log('success', result);
});
worker.on('error', (msg: any) => {
  console.error(msg);
});
