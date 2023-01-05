import { Router } from 'express';
import {
  deleteCard,
  createCard,
  getAllCards,
  likeCard,
  dislikeCard,
} from '../controllers/cards';

const router = Router();

router.get('/cards', getAllCards);
router.post('/cards', createCard);
router.delete('/cards/:cardId', deleteCard);
router.put('/cards/:cardId/likes', likeCard);
router.delete('/cards/:cardId/likes', dislikeCard);

export default router;