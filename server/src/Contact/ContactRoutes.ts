import Router from 'express';
import { contactMessage } from './ContactController';

const router = Router();

router.post('/', contactMessage);

export default router;