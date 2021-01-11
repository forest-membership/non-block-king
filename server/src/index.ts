// import { socker } from "./socker";
import express from "express";
import http from "http";
// import { API_PORT, HOST } from "./config";
const API_PORT = 3000;
const HOST = "127.0.0.1";

const app = express();
const server = new http.Server(app);
// socker(server);

app.listen(API_PORT || 3000, () => {
    console.log(`Api listening on port ${Number(API_PORT) || 3000}!`);
});

server.listen(Number(API_PORT) + 1, () => {
    console.log(`Socker listening on port ${Number(API_PORT) + 1}!`);
    console.log(`Api and socker whitelisted for ${HOST}`);
});
