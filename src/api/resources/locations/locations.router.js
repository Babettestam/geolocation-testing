import express from 'express';
import locationsController from './locations.controller';

export const locationRouter = express.Router();

locationRouter
  .route('/')
  .post(locationsController.create)
  .get(locationsController.get);
