import { Router } from 'express';
import { getAllEventsController, getEventByIdController } from '../controllers/events.js';


const router = Router();

router.get('/', getAllEventsController);
router.get('/:eventId', getEventByIdController);

export default router;
