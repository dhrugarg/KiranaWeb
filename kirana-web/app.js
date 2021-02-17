var express       = require("express"),
	app           = express(),
	mongoose      = require('mongoose'),
	bodyParser    = require("body-parser"),
	passport = require("passport"),
	LocalStrategy = require('passport-local'),
	User = require("./models/user"),
	Product = require("./models/products"),
	addToDb      = require("./add"),
	session = require("express-session"),
	MongoStore = require("connect-mongo")(session),
	cookieParser = require('cookie-parser'),
	Cart    = require("./models/cart")
	
	

mongoose.connect('mongodb://localhost:27017/kirana_web');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'))
app.set("view engine","ejs")
// add products to database
// addToDb();
// PASSPORT CONFIGURATION
app.use(session({
    secret: "My first self made project",
    resave: false,
    saveUninitialized: false,
	// for cart
	store: new MongoStore({mongooseConnection: mongoose.connection}),
	// to expire session of user
	cookie:{maxAge: 180*60*1000}
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
	res.locals.login = req.isAuthenticated();
	res.locals.session =req.session;
   next();
});

app.get("/",(req,res) =>{
	res.render('landing')
})

//Auth routes

//show register form
app.get('/register',(req,res)=>{
	res.render('register')
})
//handel sign up logic
app.post('/register',(req,res)=>{
	// var newUser = new User({username: req.body.username})
	User.register(new User({username: req.body.username}) , req.body.password, (err,user)=>{
		if (err){
			console.log(err)
			return res.render('register')
		}
		passport.authenticate('local')(req,res,function(){
			res.redirect('/')
		})
	})
})
//Show login form
app.get('/login',(req,res)=>{
	res.render('login')
})
//handel login logic
//app.post('/login',middleware,callback)
app.post('/login', passport.authenticate('local',
	{
	successRedirect:'/',
	failureRedirect:'/login'
	 }),(req,res)=>{
})

//logout routes
app.get('/logout',(req,res)=>{
	// console.log('current user' + currentUser)
	req.logout()
	res.redirect('/')
})

//show index page
app.get('/main',(req,res)=>{
	res.render('index')
})

//show all product page 
app.get("/show", (req, res)=>{
    // Get all products from DB
    Product.find({}, function(err, allProducts){
       if(err){
           console.log(err);
       } else {
          res.render("show",{products:allProducts});
       }
    });
});
// category pages
// show beverage and snacks page
app.get("/beverageAndSnacks", (req, res)=>{
    // Get all products from DB
    Product.find({"type":"beverages"}, function(err, allProducts){
       if(err){
           console.log(err);
       } else {
          res.render("category",{products:allProducts});
       }
    });
});
// show grocery page
app.get("/grocery", (req, res)=>{
    // Get all products from DB
    Product.find({"type":"grocery"}, function(err, allProducts){
       if(err){
           console.log(err);
       } else {
          res.render("category",{products:allProducts});
       }
    });
});
// show dairy products page
app.get("/dairy", (req, res)=>{
    // Get all products from DB
    Product.find({"type":"dairy"}, function(err, allProducts){
       if(err){
           console.log(err);
       } else {
          res.render("category",{products:allProducts});
       }
    });
});
// show pulses and spices page
app.get("/pulsesAndSpice", (req, res)=>{
    // Get all products from DB
    Product.find({"type":"pulsesAndSpice"}, function(err, allProducts){
       if(err){
           console.log(err);
       } else {
          res.render("category",{products:allProducts});
       }
    });
});
// show personal care page
app.get("/personalCare", (req, res)=>{
    // Get all products from DB
    Product.find({"type":"personal"}, function(err, allProducts){
       if(err){
           console.log(err);
       } else {
          res.render("category",{products:allProducts});
       }
    });
});
// show household care page 
app.get("/householdCare", (req, res)=>{
    // Get all products from DB
    Product.find({"type":"household"}, function(err, allProducts){
       if(err){
           console.log(err);
       } else {
          res.render("category",{products:allProducts});
       }
    });
});

// add to cart setup
app.get('/add-to-cart/:id',(req,res)=>{
	var productId = req.params.id;
	var cart = new Cart(req.session.cart ? req.session.cart : {});
	Product.findById(productId, (err,product)=>{
		if(err){
			return res.redirect('/');
		}
		cart.add(product, product.id);
		req.session.cart = cart;
		console.log(req.session.cart);
		res.redirect('/')
	})
})

// to view shopping cart
app.get('/cart',(req,res)=>{
	if(!req.session.cart){
		return res.render('cart',{product: null});
	}
	var cart = new Cart(req.session.cart);
	res.render('cart',{products: cart.generatedArray(), totalPrice: cart.totalPrice})
})

// checkout route
app.get('/checkout', (req,res)=>{
	if(!req.session.cart){
		return res.render('cart');
	}
	var cart = new Cart(req.session.cart);
	res.render('checkout', {total: cart.totalPrice})
})

app.listen(2000,() =>{
	console.log("Kirana web server has started .....");
})