import type { MouseEventHandler } from "react";

type Action = "submit" | "reset" | "button" | undefined;
type Variant = "primary" | "secondary" | "basic";
type Size = "sm" | "md" | "lg";

type Props = {
    text: string;
    type?: Action;
    variant?: Variant;
    size?: Size;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function InputButton({text, type="button", variant="basic", size="md", disabled, onClick=undefined}: Props){
    const BASE = "rounded-lg cursor-pointer";

    const VARIANT = {
        basic: "bg-yellow-400 text-black hover:bg-yellow-500",
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        secondary:"bg-zinc-200 text-zinc-800 hover:bg-zinc-300"
    };

    const SIZE = {
        sm: "px-2 py-1 text-sm",
        md: "px-4 py-2 text-md",
        lg: "px-6 py-3 text-lg",
    };

    return (
        <button
            type={type}
            disabled = {disabled}
            className = {`${BASE} ${VARIANT[variant]} ${SIZE[size]}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}