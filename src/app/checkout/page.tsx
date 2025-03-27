import CheckoutForm from "./form";
import { stripe } from "@/libs/stripe";

type SearchParams = Promise<{ [key: string]: string | undefined }>;

export default async function Checkout(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const id = searchParams?.id;

  if (!id) return; // TODO: return to home

  const product = await stripe.products.retrieve(id as string);
  const price = await stripe.prices.retrieve(product.default_price as string);

  if (!price) return; // TODO: return to home

  const { client_secret: clientSecret } = await stripe.paymentIntents.create({
    amount: price?.unit_amount as number, 
    currency: "brl",
    automatic_payment_methods: {
      enabled: true,
    },
  });


  return (
    <div id="checkout">
      <CheckoutForm clientSecret={clientSecret as string} />
    </div>
  );
}
