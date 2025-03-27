import { STATUS_MAP } from "@/constants/status-map";
import { stripe } from "@/libs/stripe";
import Link from "next/link";
import { redirect } from "next/navigation";

type SearchParams = Promise<{ [key: string]: string | undefined }>;

export default async function Success(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const { payment_intent: paymentIntentId } = searchParams;

  if (!paymentIntentId) redirect("/");

  const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

  if (!paymentIntent) redirect("/");

  const { status } = paymentIntent;
  const { text, icon } = STATUS_MAP[status || ""] || STATUS_MAP.default;

  return (
    <div id="payment-status">
      <div id="status-icon" style={{ backgroundColor: `#${icon.color}` }}>
        {icon.svg}
      </div>
      <h2 id="status-text">{text}</h2>
      <table>
        <tbody>
          <tr>
            <td>ID</td>
            <td>{paymentIntentId}</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>{status}</td>
          </tr>
        </tbody>
      </table>
      <a
        href={`https://dashboard.stripe.com/payments/${paymentIntentId}`}
        target="_blank"
        id="view-details"
      >
        Ver detalhes
      </a>
      <Link href="/">Teste novamente</Link>
    </div>
  );
}
