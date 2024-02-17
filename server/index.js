import expess from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
// import postRoutes from "../routes/posts"
import postRoutes from "./routes/posts.js"

const app = expess();
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))

app.use(cors());
app.use('/posts',postRoutes);

// const connection_URL = "mongodb+srv://anwarnadeem2010:B7jVIJUzH3RjCity@cluster0.13b5r12.mongodb.net/";
const connection_URL = "mongodb+srv://anwarnadeem2010:B7jVIJUzH3RjCity@cluster0.dwtpgns.mongodb.net/";

const PORT = 5001;

mongoose.connect(connection_URL,{
    useUnifiedTopology:true
}).then(()=>{ 
    app.listen(PORT,()=>console.log("Server is running",PORT))
})
.catch((error)=>{console.log(error.message)})

// mongoose.set('useFindAndModify',false);




