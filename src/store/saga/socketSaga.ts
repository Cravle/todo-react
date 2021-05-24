import { socket } from '@api//socket'
import { Action } from 'redux'
import { eventChannel, Subscribe, Unsubscribe } from 'redux-saga'
import { ActionPattern, call, put, take } from 'redux-saga/effects'
import { Socket } from 'socket.io-client'

export const SOCKET_CHANGES = 'SOCKET_CHANGES'

const socketChannel = function (socket: any) {
  return eventChannel(
    (emit: any): Unsubscribe => {
      console.log('12345')
      socket.on('test', (payload: any) => {
        emit(payload)
      })

      const unsubscribe = () => {
        console.log('54312')
        socket.removeAllListeners('test')
      }

      return unsubscribe
    }
  )
}

export const watchSocket = function* () {
  const channel: ActionPattern<Action<any>> = yield call(socketChannel, socket)
  console.log(channel)
  console.log('socket start')
  while (true) {
    const payload: Generator = yield take(channel)
    console.log(payload)
    if (payload) {
      console.log(payload, 'payload')
    } else {
      console.log(payload, 'else')

      yield put(payload)
    }
  }
}
