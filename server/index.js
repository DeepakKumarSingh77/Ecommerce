
// import express from 'express';
// const app=express();
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import dotenv from 'dotenv'
// import stripe from "stripe"


// import Connection from './db/db.js';
// import Router from "./routes/route.js"
// import Defaultdata from './default.js';

// dotenv.config();


// const key=stripe(process.env.SECRET_STRIPE_KEY);

// const PORT=8000;
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}))

// app.post("/checkout", async (req, res) => {
    
//     console.log(req.body);
//     const items = req.body.items;
//     let lineItems = [];
//     items.forEach((item)=> {
//         lineItems.push(
//             {
//                 price: item.id,
//                 quantity: item.quantity
//             }
//         )
//     });

//     const session = await stripe.checkout.sessions.create({
//         line_items: lineItems,
//         mode: 'payment',
//         success_url: "https://ecom-avez.netlify.app/success",
//         cancel_url: "https://ecom-avez.netlify.app/cancel"
//     });

//     res.send(JSON.stringify({
//         url: session.url
//     }));
// });

// const username=process.env.DB_USERNAME;
// const password=process.env.DB_PASSWORD;

// app.use('/',Router);
// const url=`mongodb+srv://${username}:${password}@cluster0.th3qgir.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

// Connection(url);

// Defaultdata();

// app.listen(PORT, () => {
//     console.log('App listening on port 8000');
// })

// Express server (server.js)
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import  Stripe  from 'stripe';

const stripeKey = 'sk_test_51OpxSjSCVvHBsLVlxn99xV0Nrrf9iijdxfxHVuBRd4m3l13qwH5HAFOnpm2BhXQAAQn3o6khYG0dBRr8VAnCVkqx00jbytledk';
const stripeInstance =new Stripe(stripeKey);

import Connection from './db/db.js';
import Router from './routes/route.js';
import Defaultdata from './default.js';

dotenv.config();

const app = express();

const PORT = 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/create-checkout-session', async (req, res) => {
    console.log(req.body);
    const item=req.body;
    let lineitem=[];
    item.forEach(element => {
      lineitem.push({
        price_data:{
             currency:'inr',
             product_data:{
              name:element.id
             },
             unit_amount:element.price*100,
        },
        quantity:element.quantity
      })
    });
    const session = await stripeInstance.checkout.sessions.create({
      payment_method_types: ['card'],
       line_items:lineitem,
        mode: 'payment',
        shipping_address_collection:{
          allowed_countries:['US','IN']
        },
        success_url: 'https://deepak-ecom.netlify.app/success',
        cancel_url: 'https://deepak-ecom.netlify.app/cancel',
    });
    return res.status(200).json({ url: session.url });
});



const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

app.use('/', Router);
const url = `mongodb+srv://${username}:${password}@cluster0.th3qgir.mongodb.net/?retryWrites=true&w=majority`;

Connection(url);
Defaultdata();

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

