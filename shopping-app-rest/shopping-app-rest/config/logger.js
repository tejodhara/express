const {createLogger , transports, format}= require('winston')


const logger = createLogger({
    transports:[
        new transports.File(
            {
                filename:'data.log',
                level:'error',
                format:format.combine(format.timestamp(), format.simple())
            }
        )
      ]}
)

module.exports = 
    logger
