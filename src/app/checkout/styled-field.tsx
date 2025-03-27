import { twMerge } from "tailwind-merge";
import { StyledFieldProps } from "./interfaces";

export const StyledField = ({
  id,
  label,
  error,
  element: Element,
  elementOptions,
  className,
  onChange,
}: StyledFieldProps) => {
  const labelId = `${id}-label`;
  const errorId = `${id}-error`;

  const getLabelClasses = () =>
    twMerge(
      "text-sm font-medium transition-colors text-neutral",
      error.show ? "text-danger-dark" : ""
    );

  const getBorderClasses = () =>
    twMerge(
      "border border-neutral rounded-md p-2 transition-colors",
      error.show ? "border-danger-darkest" : "",
      className
    );

  return (
    <div className={`flex flex-col gap-1 min-w-0 ${className}`}>
      <label id={labelId} className={getLabelClasses()}>
        {label}
      </label>

      <div className="relative">
        <div role="group" className={getBorderClasses()}>
          <Element
            options={{ ...elementOptions, ariaLabel: label }}
            onChange={onChange}
            className="w-full py-1 px-2 outline-none"
          />
        </div>

        {error.show && (
          <span
            id={errorId}
            role="alert"
            aria-live="polite"
            className="text-xs text-danger-dark"
          >
            {error.message}
          </span>
        )}
      </div>
    </div>
  );
};
