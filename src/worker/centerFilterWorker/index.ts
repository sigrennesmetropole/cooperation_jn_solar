import PromiseWorker from 'promise-worker'
import CenterFilterGridWorker from './centerFilterWorker?worker'

const centerFilterGridWorker = new CenterFilterGridWorker()
const promiseWorker = new PromiseWorker(centerFilterGridWorker)

const send = (message: any) =>
  promiseWorker.postMessage({
    type: 'message',
    message,
  })

export default {
  send,
}
