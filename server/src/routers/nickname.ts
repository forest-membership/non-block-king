import express from "express";
import controller from "@/controllers/nickname";

const router = express.Router();

router.route("/").get(controller.createOnenickname);

export default router;
