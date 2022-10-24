import dotenv from 'dotenv';

dotenv.config();

const env = process.env;

export const { PORT, DB_USER, DB_PASS, DB_NAME, DB_HOST, NODE_ENV } = env;

export default env;
