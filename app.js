import express from 'express';
import { PORT } from './config.js';
import { expressLoader, mongodbLoader } from './loaders/index.js';

export default async function run() {
  try {
    const app = express();
    await expressLoader(app);
    await mongodbLoader();
    app.listen(PORT, () => {
      console.log(`Server has started on ${PORT}`);
    });
  } catch (err) {
    return console.log(err);
  }
}

