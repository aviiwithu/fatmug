import mongoose from 'mongoose';

const articleScema = mongoose.Schema({
    creator: String,
    userid: String,
    title: String,
    description: String,
    selectedFile: String,
    createdAt:{
        type: Date,
        default: new Date(),
    }
})

const articleModel = mongoose.model('article', articleScema);

export default articleModel;