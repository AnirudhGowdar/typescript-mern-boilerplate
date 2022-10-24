import Logger from 'js-logger';

Logger.useDefaults({
    defaultLevel: Logger.INFO
});

const serverLogger = Logger.get('Server');
export default serverLogger;
