import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const auth = (req,res,next)=> {

    try {
        const token = req.headers.authorization.split(' ')[1];

        let decodedData;
        if(token) {

            decodedData= jwt.verify(token, process.env.JWT_SECRET);
        }
        
        next();
        
    } catch (error) {
        return res.status(404).json({message:"auth failed in middleware"});
    }
}

export default auth;