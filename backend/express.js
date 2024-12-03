const express=require('express');
const app=new express();

const port=5000;

const cors=require('cors');
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









