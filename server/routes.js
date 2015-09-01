import express from 'express';
import index from '../controllers/index';

const router = express.Router();

router.get('/', index.Index);

export default router;
