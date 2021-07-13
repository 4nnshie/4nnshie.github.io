const express = require('express'); // Include ExpressJS
const app = express(); //Create an ExpressJS app
const bodyParser = require('body-parser'); // middleware
const session = require('express-session');
const path = require('path');
const Product = require("./Product");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/css', express.static(path.join(__dirname, 'css')));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));

let sess;

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, "view"));

//create list of products
let productList = [];

//create product objects for productsList
let tomato = new Product(1,"Tomato", 200, "Magic tomato");
let onion = new Product(2,"Onion", 3, "Basic onion");
let chair = new Product(3,"Chair", 20, "A magic throne");
let goat = new Product(4, "Goat", 0, "It's a free, an annoying goat");

    productList.push(tomato);
    productList.push(onion);
    productList.push(chair);
    productList.push(goat);

//create product objects for shoppingList

//let shoppingList = [];

app.get('/', (req, res) => {
    sess = req.session;
    if(!sess.products){
        sess.products={}
    }

    res.render("products", {
        proList: productList,
    });
});

app.post('/addToCart', (req, res) => {
    sess = req.session;
    let prodSel= req.body.selPro;
    if(sess.products[prodSel.id]){
        sess.products[prodSel.id].quantity++;
    }else{
        sess.products[prodSel.id] = prodSel;
    }
    console.log("IN POST SESS IS "+JSON.stringify(sess)+" IS "+JSON.stringify(sess.products));
    res.redirect(302, '/shoppingCart');
});

let cartList = [];

const boughtGoat={
    product:goat,
    num:2
}

const boughtOnion={
    product:onion,
    num:10
}

const boughtChair={
    product:chair,
    num:5
}

cartList.push(boughtChair);
cartList.push(boughtOnion);
cartList.push(boughtGoat);

app.get('/shoppingCart', (req, res) => {
    sess=req.session;
    console.log("IN AFTER SESS IS "+JSON.stringify(sess)+" IS "+JSON.stringify(sess.product));
    /*res.render("ShoppingCart", {
        shopList: cartList,
    });*/
});

app.listen(3000, () => {
    console.log('Your Server is running on 3000');
})

