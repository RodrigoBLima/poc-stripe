"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { PaymentForm } from "./payment-form";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

export default function CheckoutForm({
  clientSecret,
}: {
  clientSecret: string;
}) {
  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret,
        locale: "pt-BR",
      }}
    >
      <PaymentForm />
    </Elements>
  );
}
