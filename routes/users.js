import express from 'express';
import Router from 'express-promise-router';
import {getUsers, getUser, deleteUser, createUser, updateUser} from '../controllers/users.js';

const router = Router();

router.get('/',getUsers);           // [GET] localhost:3000/users
router.get('/add',createUser);      // [GET] localhost:3000/users/add
router.post('/',createUser);        // [/POST] localhost:3000/users
router.get('/:id',getUser);         // [GET] localhost:3000/users/sss
router.delete('/:id',deleteUser);   // [DELETE] localhost:3000/users/sss
export default router;

