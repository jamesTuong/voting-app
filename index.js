'use strict';

import dotenv from "dotenv";
import logger from "./config/logger.js";
import { PrismaClient } from '@prisma/client'
import app from "./app.js";

const PORT = process.env.PORT || 3000;

dotenv.config();

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

app.listen(PORT, () => {
  logger.info(`Listening to port ${PORT}`);
});


const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

