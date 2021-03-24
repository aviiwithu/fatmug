import express from 'express';
import {getArt, createArt, updateArt,deleteArt} from '../controllers/article.js';
import auth from '../middleware/auth.js'

const router = express.Router();

router.get('/',auth,getArt);
router.post('/',auth,createArt);
router.patch('/:id',auth,updateArt);
router.delete('/:id',auth,deleteArt);


export default router;