// import postMessage from "../models/postMessage"
// import postMessage from "../models/postMessage";
import PostMessage from "../models/postMessage.js";
export const getPosts = async(req,res)=>{
    // res.send("Working on posts")
    try {
        const postMessages =await PostMessage.find();
        console.log(postMessages);
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const createPost=async(req,res)=>{
    // res.send("POST creation")

    const postbody = req.body;
    const newPost = new postMessage(postbody);
    try {
        await newPost();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message:error.message})
    }
}