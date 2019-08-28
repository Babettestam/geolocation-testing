import express from 'express';
import { locationRouter } from './resources/locations';

export const restRouter = express.Router();
restRouter.use('/locations', locationRouter);
