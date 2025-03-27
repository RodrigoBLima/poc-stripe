import { ICONS } from "@/assets/svgs";

export const STATUS_MAP = {
  succeeded: { text: "Pagamento realizado com sucesso", icon: ICONS.success },
  processing: { text: "Seu pagamento está sendo processado.", icon: ICONS.info },
  requires_payment_method: {
    text: "Pagamento não efetuado, por favor tente novamente.",
    icon: ICONS.error,
  },
  canceled: {
    text: "Pagamento cancelado, por favor tente novamente.",
    icon: ICONS.error,
  },
  requires_action: {
    text: "Ação necessária para o pagamento, siga as instruções.",
    icon: ICONS.error,
  },
  requires_capture: {
    text: "Pagamento autorizado, aguardando captura.",
    icon: ICONS.error,
  },
  requires_confirmation: {
    text: "Pagamento requer confirmação, por favor confirme a operação.",
    icon: ICONS.error,
  },
  default: {
    text: "Algo deu errado, por favor tente novamente.",
    icon: ICONS.error,
  },
};
