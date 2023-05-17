import PromiseWorker from 'promise-worker'
import GridWorker from './worker?worker'

const gridWorker = new GridWorker()
const promiseWorker = new PromiseWorker(gridWorker)

const send = (message: any) =>
  promiseWorker.postMessage({
    type: 'message',
    message,
  })

export default {
  send,
}
