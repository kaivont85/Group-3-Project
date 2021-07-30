

// import {useStripe, useElements, CardElement, Elements} from '@stripe/react-stripe-js';
// import {loadStripe} from '@stripe/stripe-js';

// const stripePromise = loadStripe('pk_test_51JGER2DX5T2VcWxZlaxbjVHhFvlC9PqhbMTPBzIJ1bIMM1SAbGP3776GHa7FuJMpNO7r1NRK0yjtX6KgJ5Yvx7Jj00bxolZjQd');


// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const handleSubmit = (event) => {
//     event.preventDefault();
//   const cardElement = elements.getElement(CardElement);
// stripe.createToken(cardElement);
// stripe.createPaymentMethod({
//       type: 'card',
//       card: cardElement,
//     }); };

//   return (
//       <form onSubmit={handleSubmit}>
//       <button>Pay</button>
//     </form>
    
//   );
// //   return (
// //     <Elements stripe={stripePromise}>
// //     <CheckoutForm />
// //   </Elements>
// // );


// };


// export default CheckoutForm;