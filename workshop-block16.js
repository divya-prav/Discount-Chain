/*
 step 1 : Declare a main function called grandTotal which gets the parameter as object

 step 2 : We need to check on three things
           a. Write a function to get the total price.
           b. Write a function to get the customer have a subscription discount or not.
           c. Write a function to get the customer to have a coupon discount or not.

    Step 2a:
        1. Write a function to get a total price by passing the parameter as No-of-refills and price-per-refill   

        2. Return the product of no-of-refills and price-per-refills.

     Step 2b:
        1. Write a function to get the subscription discount by passing the parameter as total-price and subscription-status
      
        2. Return if the subscription is true then return 25% of total price or else 0.
    
    Step 2c:
        1. Write a function to get the coupon discount by passing coupon-discount status.
        
        2. Return if the hasCoupon is true return 10 or else 0.

Step 3: Declare a const totalPrice and store the total-price value by calling the function totalPrice with two arguments.

Step 4: Declare a const subscriptionDiscount and store the value by calling the function getSubscriptionDiscount with two arguments.

Step 5: Declare a const couponDiscount and store the value by calling the function getCouponDiscount with one argument.

Step 6 : find the grand-total by substracting the subscriptionDiscount and couponDiscount from totalPrice 

Step 7 : console log the grand total

step 8 : call the grandTotal function by passing the customer object in the arguments.
 
 
*/
const timmy = {
   prescription: "acetaminophen",
   pricePerRefill: 25,
   refills: 3,
   subscription: false,
   coupon: true,
};

const sarah = {
   prescription: "diphenhydramine",
   pricePerRefill: 50,
   refills: 1,
   subscription: true,
   coupon: false,
}

const rocky = {
   prescription: "phenylephrine",
   pricePerRefill: 30,
   refills: 5,
   subscription: true,
   coupon: true,
}

//function to get the total price

function getTotalPrice(pricePerRefill, noOfRefills) {

   return pricePerRefill * noOfRefills;

}

//function to get the subscription discount

function getSubscriptionDiscount(totalPrice, hasSubscription) {

   return hasSubscription ? totalPrice * 0.25 : 0;

}

//function to get the coupon discount

function getCouponDiscount(hasCoupon) {

   return hasCoupon ? 10 : 0;
}

//main function to get grand total

function grandTotal(customer_obj) {

   const totalPrice = getTotalPrice(customer_obj.pricePerRefill, customer_obj.refills);


   const subscriptionDiscount = getSubscriptionDiscount(totalPrice, customer_obj.subscription);



   const couponDiscount = getCouponDiscount(customer_obj.coupon);


   const finalAmount = totalPrice - subscriptionDiscount - couponDiscount;

   console.log(`Your grand total is $${finalAmount}`);


}

// function calling
grandTotal(timmy);
grandTotal(sarah);
grandTotal(rocky);

