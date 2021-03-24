import mongoose from 'mongoose';

import postArticle from '../models/postArticle.js'

export const getArt = async (req,res) => {
    try {
        const getArt = await postArticle.find();

        res.status(200).json(getArt);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}


export const createArt = async(req,res)=> {

    const article = req.body;
    const newArticle = new postArticle(article);
    try {
        await newArticle.save();
        res.status(201).json(newArticle);
    } catch (error) {
        res.status(409).json({message:error})
    }
}

export const updateArt = async(req,res)=>{
    const {id:_id} = req.params;
    const article = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('no article with this id');

    const updatedArt = await postArticle.findByIdAndUpdate(_id, {...article,_id}, {new:true} );
    res.json(updatedArt);
}

export const deleteArt =  async(req, res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`no article with id ${id}`);
    
    await postArticle.findByIdAndRemove(id);

    res.json({message:'post deleted successfully'})
}
