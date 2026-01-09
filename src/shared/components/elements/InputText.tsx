import { forwardRef, type ComponentPropsWithoutRef } from "react";

type Size = "xs"| "sm" | "md" | "lg" | "xl";
interface InputProps extends ComponentPropsWithoutRef<"input"> {
    sizeType?: Size;
    onTextChange?: (value: string) => void;
}

const InputText = forwardRef<HTMLInputElement, InputProps>(({onTextChange,sizeType = "md", ...props}, ref) => {
    const BASE = "border border-gray-300 p-2 rounded-lg px-3 py-2 text-md";
    
    const SIZE = {
        xs: "w-16",
        sm: "w-32",
        md: "w-48",
        lg: "w-64",
        xl: "w-80",
    };

    return (
        <input 
            onChange={(e)=>onTextChange?.(e.target.value)}
            {...props}
            ref={ref}
            className = {`${BASE} ${SIZE[sizeType]}`}
        />
    );
});
export default InputText;