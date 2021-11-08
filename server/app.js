const { sequelize, User, Product } = require('./models')
const express = require('express')

const app = express();
const jwt = require('jsonwebtoken');
app.use(express.json());

app.post('/login', (req, res) => {
    const userName = req.body.userName;
    const password = req.body.password;
})

app.post('/users', async(req, res) => {
    const { name, email} = req.body;

    try{
        const user = await User.create({name, email});

        return res.json(user)
    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
})

app.get('/users', async(req, res) => {
    try{
        const users = await User.findAll();
        return res.json(users);
    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
})

app.get('/users/:uuid', async(req, res) => {
    const {uuid} = req.params;
    try{
        const user = await User.findOne({
            where: {uuid}
        });
        return res.json(user);
    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
})

app.delete('/users/:uuid', async(req, res) => {
    const { uuid } = req.params;
    try{
        const user = await User.findOne({where: {uuid}});

        await user.destroy();
        return res.json('User deleted!')
    }catch(err){
        console.log(err);
        return res.status(500).json(err);
    }
})

app.patch('/users/:uuid', async(req, res) => {
    const { uuid } = req.params;
    const { name, email } = req.body;
    try{
        const user = await User.findOne({where: {uuid}});
        if(name){
            user.name = name;
        }
        if(email){
            user.email = email;
        }
        await user.save();
        return res.json(user);
    }catch(err){
        console.log(err);
        return res.status(500).json(err);
    }
})
app.post('/products/new', async (req, res) => {
    const { name, price, description, imageLink, shelf, color } = req.body;
    try {
        const product = await Product.create({name, price, description, imageLink, shelf, color});
        return res.json(product);
    }catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

app.get('/products', async (req, res) => {
    try{
        const products = await Product.findAll();
        return res.json(products)
    }catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})


app.get('/products/:uuid', async (req, res) => {
    const { uuid } = req.params;
    try{
        const product = await Product.findOne({
            where: { uuid}
        })
        return res.json(product)
    }catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})
app.patch('/products/:uuid', async (req, res) => {
    const { uuid } = req.params;
    const { name, price, description, imageLink, shelf, color } = req.body;
    try{
        const product = await Product.findOne({where: {uuid}});
        if(name){
            product.name = name;
        }
        if(price){
            product.price = price;
        }
        if(description){
            product.description = description;
        }
        if(imageLink){
            product.imageLink = imageLink;
        }
        if(shelf){
            product.shelf = shelf;
        }
        if(color){
            product.color = color;
        }

        await product.save();

        return res.json(product)
    }catch(e){
        console.log(e);
        return res.status(500).json(e)
    }
})

app.delete('/products/:uuid', async(req, res) => {
    const { uuid } = req.params;
    try{
        const product = await Product.findOne({where: {uuid}});

        await product.destroy();
        return res.json("Product deleted!")
    }catch(e){
        console.log(e);
        return res.status(500).json(e)
    }
})

app.listen({port:5000}, async() => {
    console.log('Server up on http://localhost:5000');
    await sequelize.authenticate();
    console.log("Database connected")
})