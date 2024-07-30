// const stripe = require('stripe')('sk_test_51OpxSjSCVvHBsLVlxn99xV0Nrrf9iijdxfxHVuBRd4m3l13qwH5HAFOnpm2BhXQAAQn3o6khYG0dBRr8VAnCVkqx00jbytledk');
import stripe from 'stripe';

const stripeKey = 'sk_test_51OpxSjSCVvHBsLVlxn99xV0Nrrf9iijdxfxHVuBRd4m3l13qwH5HAFOnpm2BhXQAAQn3o6khYG0dBRr8VAnCVkqx00jbytledk';
const stripeInstance = stripe(stripeKey);
export const stripesession=async(req,res)=>{
    console.log("hello");
    const session = await stripeInstance.checkout.sessions.create({
        line_items: [
          {
            price: '{{RECURRING_PRICE_ID}}',
            quantity: 1,
          },
          {
            price: '{{ONE_TIME_PRICE_ID}}',
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: 'https://example.com/success',
        cancel_url: 'https://example.com/cancel',
      });
      res.send({url:session.url});
}

