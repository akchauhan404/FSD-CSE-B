const express=require('express');
const app=express();
const port=8000;
app.use(express.json());
const students=[
    {
        id:1,
        name:"Atul",
        class: "M.tech"
    },
    {
        id:2,
        name:"Atul",
        class: "M.tech"
    }
]
/*
app.get('/',(req,res)=>{
    res.send("<h1>this is my home page</h1>");
})
app.get('/about',(req,res)=>{
    res.send("<h1>this is my about page</h1>");
})
app.get('/img',(req,res)=>{
    res.send("<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZVBdSn-1xDcTSccAw3D6ISpSIP07nzFcQA&s' >");
})
// dataread
app.get('/read',(req,res)=>{
    try {
        res.status(200).json({message:"Show all data",data:students});
    } catch (error) {
        res.status(500).json({message:"student data not found",error:error.message});
    }
})*/
// data read for id
app.get('/read/:id',(req,res)=>{
    try {
        const id=req.params.id;
        const student=students.find(s=>s.id==id);
        if(!student)
        {
            res.status(404).json({message:"student not found"});
        }
        res.status(200).json({message:"student found",student});
    } catch (error) {
        res.status(500).json({message:"student data not found",error:error.message});
    }
    
})
//create data
app.post('/add',(req,res)=>{
    try {
        const newstudent={
            id:students.length+1,
            ...req.body
        }
        students.push(newstudent);
        res.status(201).json({message:"student added successfully",newstudent});
        
    } catch (error) {
        res.status(500).json({message:"student not added",error:error.message});
    }
});

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})
