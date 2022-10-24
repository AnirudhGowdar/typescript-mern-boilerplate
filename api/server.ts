import express, { Express, Request, Response } from 'express';
import connectDB from './config/database';
import errorHandler from 'errorhandler';
import serverLogger from './logger';
import { PORT, NODE_ENV } from './environment';

connectDB();

const app: Express = express();
const port = PORT;

if (NODE_ENV === 'development') {
    app.use(errorHandler());
}

/**
 * @route   GET /
 * @desc    Test Base API
 * @access  Public
 */
app.get('/', (req: Request, res: Response) => {
    res.send('API is running');
});

app.listen(port, () => {
    serverLogger.info(`Server is running at https://localhost:${port}`);
});
