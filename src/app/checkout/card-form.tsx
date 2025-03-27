import { useState } from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { FieldState } from "./types";
import { Field } from "./enums";
import { StyledField } from "./styled-field";

const initialErrors: FieldState<Field> = {
  [Field.CardNumber]: { message: "", show: false },
  [Field.CardExpiry]: { message: "", show: false },
  [Field.CardCvc]: { message: "", show: false },
};

const CustomCardForm = () => {
  const [errors, setErrors] = useState<FieldState<Field>>(initialErrors);

  const handleChange = (field: Field) => (event: { error?: TypeError }) => {
    setErrors((prev) => ({
      ...prev,
      [field]: {
        message: event.error?.message || "",
        show: !!event.error,
      },
    }));
  };

  return (
    <div className="space-y-4">
      <StyledField
        id={Field.CardNumber}
        label="Número do Cartão:*"
        error={errors[Field.CardNumber]}
        element={CardNumberElement}
        elementOptions={{
          showIcon: true,
          placeholder: "1234 1234 1234 1234",
          classes: { focus: "outline-none" },
        }}
        onChange={handleChange(Field.CardNumber)}
      />

      <div className="flex gap-4 w-full" >
        <StyledField
          id={Field.CardExpiry}
          label="Data de Expiração:*"
          error={errors[Field.CardExpiry]}
          element={CardExpiryElement}
          elementOptions={{ placeholder: "MM/AA" }}
          onChange={handleChange(Field.CardExpiry)}
          className="flex-1 min-w-0"
        />

        <StyledField
          id={Field.CardCvc}
          label="CVV:*"
          error={errors[Field.CardCvc]}      
          element={CardCvcElement}
          elementOptions={{ placeholder: "CVV" }}
          onChange={handleChange(Field.CardCvc)}
          className="flex-1 min-w-0"
        />
      </div>
    </div>
  );
};

export default CustomCardForm;