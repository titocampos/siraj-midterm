
const winston = require('winston')
const moment = require('moment')
require('winston-daily-rotate-file')
const { logdir } = require('../config/general')

//const processName = process.mainModule.filename.match((/\/(?:.(?!\/))+$/)).toString().replace("/", "").replace(".js", "")
const processName = process.mainModule.filename.match("src.*").toString().split("\\").join("-").replace(".js", "")
//console.log(processName)

const transports = [
    new winston.transports.DailyRotateFile({
        // level: 'info',
        name: 'logs',
        filename: logdir + '/' + processName + '_%DATE%.log',
        maxSize: '1000k',
        maxFiles: '15d',
        zippedArchive: false
    }),

    new winston.transports.Console({
        colorize: true
    })
]

const logger = winston.createLogger({
    transports: transports
})

const log = async (service, level, msg) => {
    logger.log({
        timestamp: moment().format('YYYY-MM-DD HH:mm:ss.SSSS'),
        service: service,
        level: level,
        message: msg
    })
}   
module.exports = { log }
