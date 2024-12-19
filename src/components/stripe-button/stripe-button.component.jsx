import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51OhNsBDpxgK7jCFfVeR3cLjPlzWVKAwuBLyYPVPu4A02orPJA28vBTJC5CSj4g6gzVNGt87sbpu8qohdeitDzUrG00pJ8YCItP";
    const onToken = token => {
        console.log(token);
        alert("Payment Successful");
    }
    return (
        <StripeCheckout 
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`} 
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;