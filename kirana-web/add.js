var mongoose = require("mongoose");
var Product = require("./models/products");

var data = [
	{
		title: "Uncle chips",
		image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
		description: "Lorem ipsum dolor sit amet",
		price: 100,
		type: "beverages",
	},
	{
		title: "Donates",
		image: "https://images.unsplash.com/photo-1575549595260-623d27ba5e44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
		description: "Lorem ipsum dolor sit amet",
		price: 100,
		type: "beverages",
	},
	{
		title: "Nachos",
		image: "https://images.unsplash.com/photo-1536974851270-95538a335a81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
		description: "Lorem ipsum dolor sit amet",
		price: 100,
		type: "beverages",
	},
	{
		title: "Lote choco pie",
		image: "https://images.unsplash.com/photo-1501747188-61c00b3d8ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
		description: "Lorem ipsum dolor sit amet",
		price: 100,
		type: "beverages",
	},
	{
		title: "Capsicum",
		image: "https://images.unsplash.com/photo-1526470498-9ae73c665de8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
		description: "Lorem ipsum dolor sit amet",
		price: 100,
		type: "grocery",
	},
	{
		title: "Wheat",
		image: "https://images.unsplash.com/photo-1565061828011-282424b9ab40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
		description: "Lorem ipsum dolor sit amet",
		price: 100,
		type: "grocery",
	},
	{
		title: "Eggs",
		image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
		description: "Lorem ipsum dolor sit amet",
		price: 100,
		type: "grocery",
	},
	{
		title: "Rice",
		image: "https://images.unsplash.com/photo-1556767576-cf0a4a80e5b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
		description: "Lorem ipsum dolor sit amet",
		price: 100,
		type: "grocery",
	},
	{
		title: "Milk",
		image: "https://images.unsplash.com/photo-1536238202089-6ce355328a96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
		description: "Lorem ipsum dolor sit amet",
		price: 100,
		type: "dairy",
	},
	{
		title: "Butter",
		image: "https://images.unsplash.com/photo-1589985269102-ff38adf6f00d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
		description: "Lorem ipsum dolor sit amet",
		price: 100,
		type: "dairy",
	},
	{
		title: "Paneer",
		image: "https://images.unsplash.com/photo-1570534684425-f79109cccc35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
		description: "Lorem ipsum dolor sit amet",
		price: 100,
		type: "dairy",
	},
	{
		title: "Mozerela cheese",
		image: "https://images.unsplash.com/photo-1453078977505-10c3e375c2a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
		description: "Lorem ipsum dolor sit amet",
		price: 100,
		type: "dairy",
	},
	{
		title: "Haldi",
		image: "https://images.unsplash.com/photo-1583949885751-23b7d1909378?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
		description: "Lorem ipsum dolor sit amet",
		price: 100,
		type: "pulsesAndSpice",
	},
	{
		title: "Garam masala",
		image: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
		description: "Lorem ipsum dolor sit amet",
		price: 100,
		type: "pulsesAndSpice",
	},
	{
		title: "Cinemon",
		image: "https://images.unsplash.com/photo-1581600140682-d4e68c8cde32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
		description: "Lorem ipsum dolor sit amet",
		price: 100,
		type: "pulsesAndSpice",
	},
	{
		title: "Jeera",
		image: "https://images.unsplash.com/photo-1547753100-5077391eea4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
		description: "Lorem ipsum dolor sit amet",
		price: 100,
		type: "pulsesAndSpice",
	},
	{
		title: "Item 1",
		image: "https://images.unsplash.com/photo-1541533693007-7ea47d894b0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
		description: "Lorem ipsum dolor sit amet",
		price: 100,
		type: "personal",
	},
	{
		title: "Item 2",
		image: "https://images.unsplash.com/photo-1577563717655-919fc57789b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
		description: "Lorem ipsum dolor sit amet",
		price: 100,
		type: "personal",
	},
	{
		title: "Item 3",
		image: "https://images.unsplash.com/photo-1546477387-7a01c38f0703?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
		description: "Lorem ipsum dolor sit amet",
		price: 100,
		type: "personal",
	},
	{
		title: "Item 4",
		image: "https://images.unsplash.com/photo-1573027428204-6971ed0351c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
		description: "Lorem ipsum dolor sit amet",
		price: 100,
		type: "personal",
	},
	{
		title: "Item 1",
		image: "https://images.unsplash.com/photo-1591465001581-2c57a07a7a30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
		description: "Lorem ipsum dolor sit amet",
		price: 100,
		type: "household",
	},
	{
		title: "Item 2",
		image: "https://images.unsplash.com/photo-1591972653901-cd9db8aac1ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
		description: "Lorem ipsum dolor sit amet",
		price: 100,
		type: "household",
	},
	{
		title: "Item 3",
		image: "https://images.unsplash.com/photo-1512360117454-22f9188c2379?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
		description: "Lorem ipsum dolor sit amet",
		price: 100,
		type: "household",
	},
	{
		title: "Item 4",
		image: "https://images.unsplash.com/photo-1556760585-8eeceb422a3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
		description: "Lorem ipsum dolor sit amet",
		price: 100,
		type: "household",
	},
	
]


function addToDb(){
   //Remove all campgrounds
   Product.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("all products removed!");
         // add a few Products
        data.forEach(function(add){
            Product.create(add, function(err, product){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a product");
                    //create a comment
                    // Comment.create(
                    //     {
                    //         text: "This place is great, but I wish there was internet",
                    //         author: "Homer"
                    //     }, function(err, comment){
                    //         if(err){
                    //             console.log(err);
                    //         } else {
                    //             campground.comments.push(comment);
                    //             campground.save();
                    //             console.log("Created new comment");
                    //         }
                    //     });
                }
            });
        });
    }); 
}

module.exports = addToDb;