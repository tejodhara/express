const app = require('./app.js')

const port = process.env.PORT || 2000


app.listen(port,()=>{
    console.log(`Server listening at ${port}`);
})