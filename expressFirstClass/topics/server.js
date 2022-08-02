const express =  require('express')         // instance of express class

const app = express()
const port = 9000

// create controller
app.get('/',(req,res)=>{                    // get the request
    res.send('<h1> Home page </h1>')        // send the response to client side
})

app.listen(port,()=>{                       // to execute the server we use listen
    console.log('Server is listen to port 9000');   
})