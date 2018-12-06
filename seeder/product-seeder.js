var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping');

var products = [
    new Product({
        imagePath:'/images/Products/1.jpg',
        title: 'Bag + Shoe + Glass + Bangle',
        description: 'Complete kit for Women outing and beautiful look',
        price: 195
    }),
    new Product({
        imagePath:'/images/Products/2.jpg',
        title: 'Wrist Watch',
        description: 'High quality wrist watch that makes your wrist sweet.',
        price: 105
    }),
    new Product({
        imagePath:'/images/Products/3.jpg',
        title: 'Wrist Watch',
        description: 'Leather ahndle wrist watch for firmness',
        price: 205
    }),
    new Product({
        imagePath:'/images/Products/4.jpg',
        title: 'Wrist watch',
        description: 'High quality wrist watch set for guys.',
        price: 92
    }),
    new Product({
        imagePath:'/images/Products/5.jpg',
        title: 'Original Joggers',
        description: 'High quality joggers for slim guys',
        price: 75
    }),
    new Product({
        imagePath:'/images/Products/6.jpg',
        title: 'Grey Joggers',
        description: 'High quality Grey colored joggers.',
        price: 95
    }),
    new Product({
        imagePath:'/images/Products/7.jpg',
        title: 'Female Shoes',
        description: 'High quality shoes that fits women.',
        price: 125
    }),
    new Product({
        imagePath:'/images/Products/8.jpg',
        title: 'Multiple shoes',
        description: 'High quality shoes for different outing.',
        price: 85
    }),
    new Product({
        imagePath:'/images/Products/9.jpg',
        title: 'Carton brown Shoe',
        description: 'High quality shoe for pretty females.',
        price: 106
    }),
    new Product({
        imagePath:'/images/Products/10.jpg',
        title: 'Bluetooth Speaker',
        description: 'High quality bluetooth speaker.',
        price: 116
    }),
    new Product({
        imagePath:'/images/Products/11.jpg',
        title: 'Women Hand Bag',
        description: 'High quality Hand bag for pretty ladies.',
        price: 216
    }),
    new Product({
        imagePath:'/images/Products/12.jpg',
        title: 'Hair tie',
        description: 'High quality hair tie for better grip.',
        price: 115
    }),
    new Product({
        imagePath:'/images/Products/13.jpg',
        title: 'Wrist watch',
        description: 'Original wrist watch for.',
        price: 114
    }),
    new Product({
        imagePath:'/images/Products/14.jpg',
        title: 'Bluetooth Speaker',
        description: 'High quality speaker for a better sound.',
        price: 126
    }),
    new Product({
        imagePath:'/images/Products/15.jpg',
        title: 'Female gown',
        description: 'High quality gown that fits women.',
        price: 145
    }),
    new Product({
        imagePath:'/images/Products/16.jpg',
        title: 'Femal sleeve',
        description: 'High quality sleeveless gown for women.',
        price: 85
    }),
    new Product({
        imagePath:'/images/Products/17.jpg',
        title: 'Woofer speaker',
        description: 'High quality Woofer speaker set for homes.',
        price: 206
    }),
    new Product({
        imagePath:'/images/Products/18.jpg',
        title: 'Bluetooth Speaker',
        description: 'High quality bluetooth speaker.',
        price: 116
    }),
    new Product({
        imagePath:'/images/Products/19.jpg',
        title: 'Sneakers',
        description: 'Sneakers for giving men a better appearance.',
        price: 216
    }),
    new Product({
        imagePath:'/images/Products/20.jpg',
        title: 'Hand bag',
        description: 'High quality Hand Bag for women and Ladies.',
        price: 115
    }),
    new Product({
        imagePath:'/images/Products/21.jpg',
        title: 'Black bag',
        description: 'High quality back bag for your comfort.',
        price: 126
    }),
new Product({
    imagePath:'/images/Products/22.jpg',
    title: 'Red Bag',
    description: 'Original red bag for everyone.',
    price: 115
}),
new Product({
    imagePath:'/images/Products/23.jpg',
    title: 'Ring',
    description: 'Ring made of pure gold and glitters.',
    price: 126
}),  
new Product({
    imagePath:'/images/Products/24.jpg',
    title: 'Ring',
    description: 'High quality and Golden Ring',
    price: 115
})

];

var done = 0;
for (var i = 0; i<products.length; i++){
    products[i].save(function(err, result){
       done++;
       if(done === products.length){
           exit();
       }
    });
}

function exit(){
   mongoose.disconnect();
}
