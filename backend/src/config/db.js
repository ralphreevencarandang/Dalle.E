import mongoose from 'mongoose'

export const connectDB = async()=>{
    try{
         mongoose.set('strictQuery', true)
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Database Connected! ');

    }catch(error){
        console.log('Error connecting database:',error);
        process.exit(1)
        
    }
}