import { forwardRef, type ComponentPropsWithoutRef } from "react";

const InputText = forwardRef<HTMLInputElement, ComponentPropsWithoutRef<"input">>((props, ref) => {
    const BASE = "border border-gray-300 p-2 rounded-lg px-3 py-2 text-md w-70";
    return (
        <input 
            {...props}
            ref={ref}
            className = {BASE}
        />
    );
});
export default InputText;