"use client";

import { useState, useRef } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
} from "@stripe/react-stripe-js";
import { Button } from "@/components/button/button";
import CustomCardForm from "./card-form";
import { PaymentMethodEventDetail } from "./interfaces";

declare global {
  interface HTMLElementEventMap {
    paymentMethodCreated: CustomEvent<PaymentMethodEventDetail>;
    paymentError: CustomEvent<{ message: string }>;
  }
}

export function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const dispatchPaymentEvent = (detail: PaymentMethodEventDetail) => {
    const event = new CustomEvent("paymentMethodCreated", {
      bubbles: true,
      composed: true,
      detail,
    });
    formRef.current?.dispatchEvent(event);
  };

  const dispatchErrorEvent = (message: string) => {
    const event = new CustomEvent("paymentError", {
      bubbles: true,
      composed: true,
      detail: { message },
    });
    formRef.current?.dispatchEvent(event);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsLoading(true);

    try {
      const { error: submitError } = await elements.submit();
      if (submitError) throw submitError;

      const cardElement = elements.getElement(CardNumberElement);
      if (!cardElement) throw new Error("Elemento do cartão não encontrado");

      const { paymentMethod, error } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      if (error || !paymentMethod?.card) {
        const message =
          error instanceof Error
            ? error.message
            : "Falha ao processar método de pagamento";
        dispatchErrorEvent(message);
        throw error || new Error("Falha ao processar método de pagamento");
      }

      dispatchPaymentEvent({
        brand: paymentMethod.card.brand,
        last4: paymentMethod.card.last4,
        expMonth: paymentMethod.card.exp_month,
        expYear: paymentMethod.card.exp_year,
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Erro desconhecido";
      dispatchErrorEvent(message);
      console.error("Erro no pagamento:", message);
    }
  };

  return (
    <form
      ref={formRef}
      id="payment-form"
      className="flex flex-col gap-4"
      onSubmit={handleSubmit}
      aria-live="polite"
    >
      <CustomCardForm />

      <Button
        variant="primary"
        className="cursor-pointer rounded-md text-white text-lg"
        disabled={isLoading || !stripe}
        aria-disabled={isLoading || !stripe}
      >
        {isLoading ? (
          <span className="spinner" aria-label="Processando pagamento">
            Carregando...
          </span>
        ) : (
          "Comprar"
        )}
      </Button>
    </form>
  );
}
