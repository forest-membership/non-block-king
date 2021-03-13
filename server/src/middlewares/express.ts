import express from "express";
import logger from "morgan";
import cookieParser from "cookie-parser";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";

export const expressMiddleware = [
    logger("dev"),
    cookieParser(),
    express.json(),
    express.urlencoded({ extended: false }),
];

export const thirdPartyMiddleware = [compression(), helmet(), cors()];
