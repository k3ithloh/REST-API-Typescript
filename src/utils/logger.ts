import logger from 'pino'
import dayjs from 'dayjs'

// const pino = require('pino')
// const logger = pino({
//   transport: {
//     target: 'pino-pretty'
//   },
// })

const log = logger({
    transport: {
    target: 'pino-pretty'
  },
    timestamp: () => `,"time":"${dayjs().format()}"`
})

export default log;