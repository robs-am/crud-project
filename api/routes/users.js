import express from "express";

const router = express.Router();

router.get("/", getUsers)

export default router;