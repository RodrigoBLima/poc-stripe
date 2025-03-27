import { Field } from "./enums";
import { FieldError } from "./types";

export interface StyledFieldProps {
  id: Field;
  label: string;
  error: FieldError;
  element: React.ElementType;
  elementOptions: object;
  className?: string;
  onChange: (event: { error?: TypeError }) => void;
}

export interface PaymentMethodEventDetail {
  brand: string;
  last4: string;
  expMonth: number;
  expYear: number;
}
