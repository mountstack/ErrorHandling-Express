const express = require('express'); 
const ErrorHandler = require('./ErrorHandler'); 

const app = express(); 
app.use(express.json()); 

app.get('/home', (req, res, next) => {
    // let a = 10; 
    try {
        if(a) {
            // code 
        }
    } catch (error) {
        next(ErrorHandler.serverError()); 
    }
}) 

app.use((req, res, next) => {
    next(ErrorHandler.pageNotFound()); 
})

app.use((err, req, res, next) => { 
    if(err instanceof ErrorHandler) { 
        res.status(err.status).json({ 
            error: { 
                status: err.status, 
                message: err.message 
            } 
        }) 
    } 
}) 

app.listen(5000, () => console.log('App is live on 5000')); 