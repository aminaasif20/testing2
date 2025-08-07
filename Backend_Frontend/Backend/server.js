import express from 'express';
const app = express();

const port=process.env.PORT || 3000;

// app.get('/',(req,res)=>{
//     res.send('Hello World');
// })

// get a list of 5 jokes
app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            'id':1,
            title:'Why did the chicken cross the road?',
            content: 'To get to the other side!'
        },
        {
            'id':2,
            title:'Why don’t scientists trust atoms?',
            content: 'Because they make up everything!'
        },
        {
            'id':3,
            title:'What do you call fake spaghetti?',
            content: 'An impasta!'
        },
        {
            'id':4,
            title:'Why did the scarecrow win an award?',
            content: 'Because he was outstanding in his field!'
        },
        {
            'id':5,
            title:'What do you call cheese that is not yours?',
            content: 'Nacho cheese!'
        }
    ]
    res.send(jokes);
})

app.listen(port,()=>{
    console.log(`Server is running at http://localhot:${port}`);
})