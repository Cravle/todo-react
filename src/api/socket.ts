import io from 'socket.io-client'

import { apiPath } from './index'

export const socket = io(apiPath)
