import { Router } from 'express';
import { createParticipantController, getAllParticipantsController } from '../controllers/participants.js';

const router = Router();

router.post('/', createParticipantController);
router.get('/', getAllParticipantsController);

export default router;
