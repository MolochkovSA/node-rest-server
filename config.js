import 'dotenv/config';

const {
  NODE_ENV = 'production',
  MONGO_URL,
  ENDPOINT,
  PORT = 8080,

} = process.env;

export {
  NODE_ENV,
  MONGO_URL,
  ENDPOINT,
  PORT,
};