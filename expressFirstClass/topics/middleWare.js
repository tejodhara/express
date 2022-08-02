const express =  require('express')         // instance of express class

const app = express()
const port = 9000

app.use(datemiddleware);

app.get('/',(req,res)=>{                    // get the request
    res.send('<h1> Home page </h1>')    // send the response to client side
})

app.get('/user',(req,res)=>{                    // controller
    res.send('<h1> User page </h1>')    
})


// middle ware
function datemiddleware(req,res,next){
    console.log(`${req.originalUrl}`);
    next()
}
// const datemiddleware=(req,res,next)=>{
//     console.log('This is my first middleware');
// };
// app.use(datemiddleware);

app.listen(port,()=>{                       // to execute the server we use listen
    console.log('Server is listen to port 9000');   
})