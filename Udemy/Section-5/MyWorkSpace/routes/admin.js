const express = require('express')

const router = express.Router()

// reach by  /admin/add-product => GET
router.get('/add-product',(req,res,next) => {
    console.log("we are in the middleware!");
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Production</button></form>');
});

// reach by  /admin/add-product => GET
router.post('/add-product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})

module.exports = router;