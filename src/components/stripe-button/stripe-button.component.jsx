import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51JDXdDDO2Q9AecKah5ymL0HNwQZpNmTGCshc6IxmtZnYwkd4B3FlXjfWLkcfnyWJtsgSQmBqw06SNA5ZFmw2D40800BfrJpcg2';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Succesful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing'
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
