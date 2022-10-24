import { connect, connection } from 'mongoose';
import { DB_NAME, DB_HOST, DB_PASS, DB_USER } from '../environment';
import serverLogger from '../logger';

const connectionString = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_NAME}.${DB_HOST}/?retryWrites=true&w=majority`;

/**
 * @description Function to establish database connection.
 */
const connectDB = async () => {
    try {
        // Event handlers defined to monitor connection events
        connection.on('connected', () => {
            // Callback to check if database is successfully connected.
            serverLogger.info(`Connected to MongoDB cluster "${DB_NAME}"`);
        });
        connection.on('disconnected', () => {
            // Callback to warn about database disconnection.
            serverLogger.warn(`Disconnected from MongoDB cluster`);
        });

        // Connect to backend database
        await connect(`${connectionString}`);
    } catch (err: any) {
        serverLogger.error(
            `DB Connection Error - ${
                err instanceof Error
                    ? err.message
                    : 'Unknown error has occurred'
            }`
        );
        // Exit process with failure
        process.exit(1);
    }
};

export default connectDB;
