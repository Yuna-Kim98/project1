import express from 'express';
import * as controller from '../controller/adminController.js';

const router = express.Router();

router.post('/login', controller.checkAdminLogin);

export default router;