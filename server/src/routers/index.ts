import express from "express";
import nickname from "@/routers/nickname";

const router = express.Router();

router.use("/nickname", nickname);

export default router;
