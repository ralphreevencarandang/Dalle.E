import express from 'express'
import {v2 as cloudinary} from 'cloudinary'
import * as dotenv from 'dotenv'
import OpenAI  from 'openai'
dotenv.config()

const router = express.Router();
router.get('/', (req, res)=>{
    res.send('This is post routes!')
})


export default router