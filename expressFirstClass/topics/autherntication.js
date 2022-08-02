const express =  require('express')         // instance of express class

const app = express()
const port = 9000

app.use(datemiddleware);
// create controller
app.get('/',(req,res)=>{                    // get the request
    res.send('<h1> Home page </h1>')    
})

app.get('/user',userAuthentication,(req,res)=>{                    
    res.send('<h1> User page </h1>')    
})


// middle ware
function datemiddleware(req,res,next){
    console.log(`${req.originalUrl}`);                  // to print resourse 
    next()
}

function userAuthentication(req,res,next){
    if(req.query.admin === 'ture'){
        next();
    } else{
        res.send('404 page not found')
    }
}


app.listen(port,()=>{                       // to execute the server we use listen
    console.log('Server is listen to port 9000');   
})