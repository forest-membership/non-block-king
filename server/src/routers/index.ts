import express from 'express';
import nicknameRouter from '@/routers/nickname';

const router = express.Router();

router.use('/nickname', nicknameRouter);

export default router;
