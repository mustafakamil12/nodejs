exports.getAddProduct = (req,res,next) => {
    console.log("we are in the middleware!");
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Production</button></form>');
};

exports.postAddProduct = (req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
};

exports.getProduct = (req,res,next) => {
    console.log("we are in another middleware!");
    res.send('<h1>Hello from Express!</h1>');
};

