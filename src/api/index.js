import express from "express";
import { locationRouter } from "./resources/locations";
import { appstateRouter } from "./resources/appstate";

export const restRouter = express.Router();
restRouter.use("/locations", locationRouter);
restRouter.use("/appstate", appstateRouter);
