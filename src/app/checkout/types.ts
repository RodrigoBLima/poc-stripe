export type FieldError = {
  message: string;
  show: boolean;
};

export type FieldState<T extends string | number | symbol> = Record<T, FieldError>;
