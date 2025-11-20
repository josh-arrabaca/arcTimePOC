'use strict';
import {https} from 'firebase-functions';
import next from 'next';

const isDev = process.env.NODE_ENV !== 'production';

const server = next({
  dev: isDev,
  conf: {distDir: '.next'},
});
const nextjsHandle = server.getRequestHandler();

export const serverFunc = https.onRequest(async (req, res) => {
  await server.prepare();
  return nextjsHandle(req, res);
});
