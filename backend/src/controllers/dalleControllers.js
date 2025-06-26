import OpenAI  from 'openai'
import * as dotenv from 'dotenv'
dotenv.config()


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


export const generateImage = async (req, res)=>{
    try {
        const {prompt} = req.body;

        const response = await openai.responses.create({
            model: "gpt-4.1-mini",
            input: prompt,
            tools: [{type: "image_generation"}],
        });
        
   
        res.status(200).json(response)

    } catch (error) {
        console.log('Error generating Image', error);
        res.status(500).send(error?.response.data.error.message)
        
    }
}