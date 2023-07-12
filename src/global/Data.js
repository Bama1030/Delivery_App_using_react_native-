
export const filterData = [{ name: "Vegetable", image: require("../assets/vegetable.jpeg"), id: "0" },
{ name: "Burgers", image: require("../assets/burger.jpg"), id: "1" },
{ name: "Hotdog", image: require("../assets/hotdog.jpeg"), id: "2" },
{ name: "Chinese", image: require("../assets/chinise.jpeg"), id: "3" },
{ name: "Seafood", image: require("../assets/seafood.jpeg"), id: "4" },
{ name: "Salad", image: require("../assets/salad.jpg"), id: "5" }

];

export const filterData2 = [{ name: "Vegetable", image: 'https://images.pexels.com/photos/1152237/pexels-photo-1152237.jpeg?auto=compress&cs=tinysrgb&w=400', id: "0" },
{ name: "Burgers", image: 'https://images.pexels.com/photos/59943/pexels-photo-59943.jpeg?auto=compress&cs=tinysrgb&w=400', id: "1" },
{ name: "Hotdog", image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=400', id: "2" },
{ name: "Chinese", image: 'https://images.pexels.com/photos/3590401/pexels-photo-3590401.jpeg?auto=compress&cs=tinysrgb&w=400', id: "3" },
{ name: "Seafood", image: 'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=400', id: "4" },
{ name: "Salad", image: 'https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg?auto=compress&cs=tinysrgb&w=400', id: "5" },

];

export const restaurantsData = [

    {
        restaurantName: "KFC", farAway: "12.7",
        businessAddress: "22 street", images: 'https://media.istockphoto.com/id/477596753/photo/homemade-southern-fried-chicken.jpg?s=612x612&w=0&k=20&c=8b_5KjKmmO34ChsqVZN4-1YlDXyVJNlKh3w6qtVjR88=',
        avarageReview: 4.3, numberofReview: 272, coordinates: { lat: -26.1898612, lng: 28.246325 }, discount: 10, deliveryTime: 15, collectTime: 5, foodType: "Burgers,Wraps,Milkshake",
        productData: [{ name: "Hand cut chips", price: 29.30, image: 'https://www.mashed.com/img/gallery/fast-food-fries-ranked-from-worst-to-best-white-castle-chick-fil-a-hardees-as-five-guys/intro-1555705238.jpg' },
        { name: "Big Mac", price: 50.80, image: "https://e7.pngegg.com/pngimages/503/467/png-clipart-mcdonald-s-big-mac-fast-food-hamburger-church-s-chicken-kfc-big-mac-hamburger-thumbnail.png" },
        { name: "Chicken Burger", price: 70, image: "https://www.citypng.com/public/uploads/preview/fried-chicken-burger-fast-food-download-png-11653073932ojyttimskd.png" },
        ],
        id: 0
    },

    {
        restaurantName: "Steers", farAway: "21.2",
        businessAddress: "22 street", images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRIL8dzGrbbaVuRQ8BmJQXXXdxN2rvY0cYlQ&usqp=CAU',
        avarageReview: 4.9, numberofReview: 272, coordinates: { lat: -26.1888612, lng: 28.246325 }, discount: 10, deliveryTime: 15, collectTime: 5, foodType: "Burgers,Wraps,Milkshake",
        productData: [{ name: "Hand cut chips", price: 29.30, image: 'https://www.mashed.com/img/gallery/fast-food-fries-ranked-from-worst-to-best-white-castle-chick-fil-a-hardees-as-five-guys/intro-1555705238.jpg' },
        { name: "Big Mac", price: 50.80, image: "https://e7.pngegg.com/pngimages/503/467/png-clipart-mcdonald-s-big-mac-fast-food-hamburger-church-s-chicken-kfc-big-mac-hamburger-thumbnail.png" },
        { name: "Chicken Burger", price: 70, image: "https://www.citypng.com/public/uploads/preview/fried-chicken-burger-fast-food-download-png-11653073932ojyttimskd.png" },
        ],
        id: 1
    },

    {
        restaurantName: "Roman Pizza", farAway: "21.2",
        businessAddress: "22 street", images: 'https://media.lacucinaitaliana.com/photos/5ff46f619405f8652a925314/2:1/w_1200,c_limit/pizza%20roman%20style%20%20cover.jpg',
        avarageReview: 4.9, numberofReview: 272, coordinates: { lat: -26.1888612, lng: 28.246325 }, discount: 10, deliveryTime: 15, collectTime: 5, foodType: "Burgers,Wraps,Milkshake",
        productData: [{ name: "Hand cut chips", price: 29.30, image: 'https://www.mashed.com/img/gallery/fast-food-fries-ranked-from-worst-to-best-white-castle-chick-fil-a-hardees-as-five-guys/intro-1555705238.jpg' },
        { name: "Big Mac", price: 50.80, image: "https://e7.pngegg.com/pngimages/503/467/png-clipart-mcdonald-s-big-mac-fast-food-hamburger-church-s-chicken-kfc-big-mac-hamburger-thumbnail.png" },
        { name: "Chicken Burger", price: 70, image: "https://www.citypng.com/public/uploads/preview/fried-chicken-burger-fast-food-download-png-11653073932ojyttimskd.png" },
        ],
        id: 2
    },

    {
        restaurantName: "Mc Donalds", farAway: "21.2",
        businessAddress: "22 street", images: 'https://e7.pngegg.com/pngimages/503/467/png-clipart-mcdonald-s-big-mac-fast-food-hamburger-church-s-chicken-kfc-big-mac-hamburger-thumbnail.png',
        avarageReview: 4.9, numberofReview: 272, coordinates: { lat: -26.1888612, lng: 28.246325 }, discount: 10, deliveryTime: 15, collectTime: 5, foodType: "Burgers,Wraps,Milkshake",
        productData: [
            { name: "Hand cut chips", price: 29.30, images: 'https://www.mashed.com/img/gallery/fast-food-fries-ranked-from-worst-to-best-white-castle-chick-fil-a-hardees-as-five-guys/intro-1555705238.jpg' },
            { name: "Big Mac", price: 50.80, images: "https://e7.pngegg.com/pngimages/503/467/png-clipart-mcdonald-s-big-mac-fast-food-hamburger-church-s-chicken-kfc-big-mac-hamburger-thumbnail.png" },
            { name: "Chicken Burger", price: 70, images: "https://www.citypng.com/public/uploads/preview/fried-chicken-burger-fast-food-download-png-11653073932ojyttimskd.png" },
        ],
        id: 3
    },

];

export const productData = [
    {
        name: "Hand cut chips", price: 29.30, image: "https://www.mashed.com/img/gallery/fast-food-fries-ranked-from-worst-to-best-white-castle-chick-fil-a-hardees-as-five-guys/intro-1555705238.jpg",
        details: "Two 100% beef burger patties thats are hot,deliciously", id: 0
    },
    {
        name: "Big Mac", price: 50.30, image: "https://e7.pngegg.com/pngimages/503/467/png-clipart-mcdonald-s-big-mac-fast-food-hamburger-church-s-chicken-kfc-big-mac-hamburger-thumbnail.png",
        details: "Two 100% fresh burger patties thats are hot", id: 1
    },
    {
        name: "Chicken Burger", price: 70, image: "https://www.citypng.com/public/uploads/preview/fried-chicken-burger-fast-food-download-png-11653073932ojyttimskd.png",
        details: "Two 100% beef fresh", id: 2
    },
    {
        name: "Hand cut chips", price: 29.30, image: "https://www.mashed.com/img/gallery/fast-food-fries-ranked-from-worst-to-best-white-castle-chick-fil-a-hardees-as-five-guys/intro-1555705238.jpg",
        details: "Two 100% beef burger patties thats are hot,deliciously", id: 3
    },
    {
        name: "Big Mac", price: 70.20, image: "https://e7.pngegg.com/pngimages/503/467/png-clipart-mcdonald-s-big-mac-fast-food-hamburger-church-s-chicken-kfc-big-mac-hamburger-thumbnail.png",
        details: "Two 100% fresh beef burger patties thats are hot", id: 4
    },
    {
        name: "Chicken Burger", price: 70, image: "https://www.citypng.com/public/uploads/preview/fried-chicken-burger-fast-food-download-png-11653073932ojyttimskd.png",
        details: "Two 100% beef fresh", id: 5
    },
];

export const menuData = [
    { title: "BEEF", special: false, key: 0 },
    { title: "CHICKEN", special: false, key: 1 },
    { title: "VEGGIE BURGER", special: false, key: 2 },
    { title: "FRIES & CORN", special: false, key: 3 },
    { title: "SALADS", special: false, key: 4 },
    { title: "HAPPY MEALS", special: false, key: 5 },
    { title: "SHARE BOX", special: false, key: 6 },
    { title: "MILKSHAKES", special: false, key: 7 },
    { title: "COLD DRINKS", special: false, key: 8 },
    { title: "DESSERTS", special: false, key: 9 },
    { title: "HOT DRINKS", special: false, key: 10 }
];

export const specialData = [
    { title: "LIMITTED OFFER", key: 0 },
    { title: "GO CHILL", key: 1 },
    { title: "GO CHEESE", key: 2 },
    { title: "MCCHICKEN DELUXE PROMO", key: 3 }
];

export const menu = [
    { key:1 ,title: "BEEF"},
    { key:2 ,title: "CHICKEN"},
    { key:3 ,title: "VEGGIE BURGER"},
    { key:4 ,title: "HAPPY MEALS"},
    { key:5 ,title: "SHARE BOX" },
    { key:6 ,title: "Fries" },
    { key:7 ,title: "Sides"},
    { key:8 ,title: "Milkshakes"},
];






export const menuDetailedData =[
    { 
      meal:"Big Mac",
      price:70.20,
      image:"https://e7.pngegg.com/pngimages/503/467/png-clipart-mcdonald-s-big-mac-fast-food-hamburger-church-s-chicken-kfc-big-mac-hamburger-thumbnail.png",
      details:"McFeast features two 100% fresh beef burger patties that are hot",
      preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
      preferenceData: [

                      [{name:"Jalapeno Dip",price:8.91,checked:false,id:10},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:11},{name:'BBQ Dip',price:11.99 ,checked:false,id:12},
                      ],

                      [{name:"Small Coke",price:8.90 ,checked:false,id:13 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:14},{name:'Small Sprite',price:11.90,checked:false ,id:15},
                      {name:'Small Coke Zero',price:3.95 ,checked:false,id:16},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:17},{name:'Small Apple Juice',price:10.95 ,checked:false,id:18},
                      {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:19},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:20},
                      ],

                      [{name:"Small Coke",price:8.90,checked:false ,id:21},{name:"Small Fanta Orange",price:8.90,checked:false ,id:22},{name:'Small Sprite',price:11.90,checked:false ,id:23},
                      {name:'Small Coke Zero',price:3.95 ,checked:false,id:24},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:25},{name:'Small Apple Juice',price:10.95,checked:false ,id:26},
                      {name:'Small Strawberry Shake',price:16.95,checked:false ,id:27},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:28},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:29},
                        ],
                          
                      [{name:"debonairs sauce",price:8.90 ,checked:false,id:30},{name:"BBQ Sauce",price:8.90,checked:false ,id:31},{name:'Tikka Sauce',price:11.90,checked:false ,id:32},
                      ],

                      [
                      {name:"Small Coke",price:8.90 ,checked:false,id:33},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:34},{name:'Small Sprite',price:11.90 ,checked:false,id:35},
                      {name:'Small Coke Zero',price:3.95 ,checked:false,id:36},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:37},{name:'Small Apple Juice',price:10.95 ,checked:false,id:38},
                      {name:'Small Strawberry Shake',price:16.95,checked:false ,id:39},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:40},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:41},
                      ],
                      ],
      minimum_quatity:[2,1,1,null,null],
      counter:[0,0,0,0,0],
      required: [true,true,true,false,false],              
      id:0
    },
  
    { 
      meal:"Hand cut chips", 
      price:29.30,
      image:"https://www.mashed.com/img/gallery/fast-food-fries-ranked-from-worst-to-best-white-castle-chick-fil-a-hardees-as-five-guys/intro-1555705238.jpg",
      details:"Two 100% fresh beef burger patties that are hot,deliciously",
      preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
      preferenceData: [

        [{name:"Jalapeno Dip",price:8.91,checked:false,id:0},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:1},{name:'BBQ Dip',price:11.99 ,checked:false,id:2},
        ],

        [{name:"Small Coke",price:8.90 ,checked:false,id:0 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
        {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
        {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},
        ],

        [{name:"Small Coke",price:8.90,checked:false ,id:0},{name:"Small Fanta Orange",price:8.90,checked:false ,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
        {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95,checked:false ,id:5},
        {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
          ],
            
        [{name:"debonairs sauce",price:8.90 ,checked:false,id:0},{name:"BBQ Sauce",price:8.90,checked:false ,id:1},{name:'Tikka Sauce',price:11.90,checked:false ,id:2},
        ],

        [
        {name:"Small Coke",price:8.90 ,checked:false,id:0},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90 ,checked:false,id:2},
        {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
        {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
        ],
        ],
        minimum_quatity:[2,1,2,null,null],
        counter:[0,0,0,0,0],
        required: [true,true,true,false,false], 
        id:1
    },
  
    {
      meal:"Chicken Burger",
      price:45.70,
      image:"https://www.citypng.com/public/uploads/preview/fried-chicken-burger-fast-food-download-png-11653073932ojyttimskd.png",
      details:"",
      preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
      preferenceData: [

        [{name:"Jalapeno Dip",price:8.91,checked:false,id:0},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:1},{name:'BBQ Dip',price:11.99 ,checked:false,id:2},
        ],

        [{name:"Small Coke",price:8.90 ,checked:false,id:0 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
        {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
        {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},
        ],

        [{name:"Small Coke",price:8.90,checked:false ,id:0},{name:"Small Fanta Orange",price:8.90,checked:false ,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
        {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95,checked:false ,id:5},
        {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
          ],
            
        [{name:"debonairs sauce",price:8.90 ,checked:false,id:0},{name:"BBQ Sauce",price:8.90,checked:false ,id:1},{name:'Tikka Sauce',price:11.90,checked:false ,id:2},
        ],

        [
        {name:"Small Coke",price:8.90 ,checked:false,id:0},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90 ,checked:false,id:2},
        {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
        {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
        ],
        ],

        minimum_quatity:[2,1,1,null,null],
        counter:[0,0,0,0,0],
        required: [true,true,true,false,false],   
      id:2
    },
  
    {
      meal:"Big Mac",
      price:50.80,
      image:"https://e7.pngegg.com/pngimages/503/467/png-clipart-mcdonald-s-big-mac-fast-food-hamburger-church-s-chicken-kfc-big-mac-hamburger-thumbnail.png",
      details:"McFeast features two 100% fresh beef burger patties that are hot",
      preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
      preferenceData: [

        [{name:"Jalapeno Dip",price:8.91,checked:false,id:0},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:1},{name:'BBQ Dip',price:11.99 ,checked:false,id:2},
        ],

        [{name:"Small Coke",price:8.90 ,checked:false,id:0 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
        {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
        {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},
        ],

        [{name:"Small Coke",price:8.90,checked:false ,id:0},{name:"Small Fanta Orange",price:8.90,checked:false ,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
        {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95,checked:false ,id:5},
        {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
          ],
            
        [{name:"debonairs sauce",price:8.90 ,checked:false,id:0},{name:"BBQ Sauce",price:8.90,checked:false ,id:1},{name:'Tikka Sauce',price:11.90,checked:false ,id:2},
        ],

        [
        {name:"Small Coke",price:8.90 ,checked:false,id:0},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90 ,checked:false,id:2},
        {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
        {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
        ],
        ],
      
        minimum_quatity:[2,1,1,null,null],
        counter:[0,0,0,0,0],
        required: [true,true,true,false,false],    
      id:3
    },
  
    
    { 
      
      meal:"Hand cut chips", 
      price:29.30,
      image:"https://www.mashed.com/img/gallery/fast-food-fries-ranked-from-worst-to-best-white-castle-chick-fil-a-hardees-as-five-guys/intro-1555705238.jpg",
      details:"Two 100% fresh beef burger patties that are hot,deliciously",
      
      preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
      
      preferenceData: [

        [{name:"Jalapeno Dip",price:8.91,checked:false,id:0},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:1},{name:'BBQ Dip',price:11.99 ,checked:false,id:2},
        ],

        [{name:"Small Coke",price:8.90 ,checked:false,id:0 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
        {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
        {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},
        ],

        [{name:"Small Coke",price:8.90,checked:false ,id:0},{name:"Small Fanta Orange",price:8.90,checked:false ,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
        {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95,checked:false ,id:5},
        {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
          ],
            
        [{name:"debonairs sauce",price:8.90 ,checked:false,id:0},{name:"BBQ Sauce",price:8.90,checked:false ,id:1},{name:'Tikka Sauce',price:11.90,checked:false ,id:2},
        ],

        [
        {name:"Small Coke",price:8.90 ,checked:false,id:0},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90 ,checked:false,id:2},
        {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
        {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
        ],
        ],

      minimum_quatity:[2,1,1,null,null],
      counter:[0,0,0,0,0],
      required: [true,true,true,false,false],     
      id:4
    },

    { 
      meal:"Big Mac",
      price:70.20,
      image:"https://e7.pngegg.com/pngimages/503/467/png-clipart-mcdonald-s-big-mac-fast-food-hamburger-church-s-chicken-kfc-big-mac-hamburger-thumbnail.png",
      details:"McFeast features two 100% fresh beef burger patties that are hot",
      preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
      preferenceData: [

                      [{name:"Jalapeno Dip",price:8.91,checked:false,id:10},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:11},{name:'BBQ Dip',price:11.99 ,checked:false,id:12},
                      ],

                      [{name:"Small Coke",price:8.90 ,checked:false,id:13 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:14},{name:'Small Sprite',price:11.90,checked:false ,id:15},
                      {name:'Small Coke Zero',price:3.95 ,checked:false,id:16},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:17},{name:'Small Apple Juice',price:10.95 ,checked:false,id:18},
                      {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:19},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:20},
                      ],

                      [{name:"Small Coke",price:8.90,checked:false ,id:21},{name:"Small Fanta Orange",price:8.90,checked:false ,id:22},{name:'Small Sprite',price:11.90,checked:false ,id:23},
                      {name:'Small Coke Zero',price:3.95 ,checked:false,id:24},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:25},{name:'Small Apple Juice',price:10.95,checked:false ,id:26},
                      {name:'Small Strawberry Shake',price:16.95,checked:false ,id:27},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:28},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:29},
                        ],
                          
                      [{name:"debonairs sauce",price:8.90 ,checked:false,id:30},{name:"BBQ Sauce",price:8.90,checked:false ,id:31},{name:'Tikka Sauce',price:11.90,checked:false ,id:32},
                      ],

                      [
                      {name:"Small Coke",price:8.90 ,checked:false,id:33},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:34},{name:'Small Sprite',price:11.90 ,checked:false,id:35},
                      {name:'Small Coke Zero',price:3.95 ,checked:false,id:36},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:37},{name:'Small Apple Juice',price:10.95 ,checked:false,id:38},
                      {name:'Small Strawberry Shake',price:16.95,checked:false ,id:39},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:40},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:41},
                      ],
                      ],
      minimum_quatity:[2,1,1,null,null],
      counter:[0,0,0,0,0],
      required: [true,true,true,false,false],              
      id:5
    },
  
  ];