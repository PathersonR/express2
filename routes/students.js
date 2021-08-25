import expres from 'express';
import Router from 'express-promise-router';
import {getUsers, getUser} from '../controllers/users.js';

const router = Router();

router.get('/',getUsers);
router.get('/:id',getUser);
export default router;

