import express from 'express'
import { generateImage } from '../controllers/dalleControllers.js';


const router = express.Router();


router.post('/generateImage',generateImage)



export default router