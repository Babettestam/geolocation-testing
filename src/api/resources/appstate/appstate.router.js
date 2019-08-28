import express from 'express';
import appstateController from './appstate.controller';

export const appstateRouter = express.Router();

appstateRouter
  .route('/')
  .post(appstateController.create)
  .get(appstateController.get);
