import express from 'express';
import * as NicknameController from '@/controllers/nickname';

const router = express.Router();

router.route('/').get(NicknameController.getRandomNickname);

export default router;
