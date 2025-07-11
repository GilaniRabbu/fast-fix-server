import express from 'express';
import UserController from './user.controller';
// import validateRequest from '../../middlewares/validateRequest';
// import { createUserValidation, updateUserValidation } from './user.validation';

const router = express.Router();

// Create a new user
router.post('/create', UserController.createUser);
router.get('/statistics', UserController.getStatistics);

export const UserRoute = router;
