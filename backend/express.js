const express=require('express');
const cors=require('cors');
const app=new express();

const dotenv =require('dotenv');
dotenv.config();


const port=process.env.PORT;


app.use(cors());

require('./db/connection');

app.use(express.json());

const userRoutes=require('./routes/userroutes');
app.use('/auth',userRoutes);

const adminRoutes=require('./routes/adminroutes');
app.use('/admin',adminRoutes);



app.listen(port,()=>{
    console.log(`The Server is successfully running at port : ${port}`);
})









