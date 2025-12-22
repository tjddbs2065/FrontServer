import { forwardRef, type ComponentPropsWithoutRef } from "react";

interface InputTextProps extends ComponentPropsWithoutRef<"input"> {
    text: string;
}

const InputText = forwardRef<HTMLInputElement, InputTextProps>((props, ref) => {
    const BASE = "border border-gray-300 p-2 rounded-lg px-3 py-2 text-md";
    return (
        <input 
            {...props}
            ref={ref}
            className = {BASE}
        />
    );
});
export default InputText;