type Variant = "primary" | "secondary";
type Size = "sm" | "md" | "lg";

type Props = {
    text: string;
    variant?: Variant;
    size?: Size;
    disabled?: boolean;
}

export default function InputButton({text, variant="primary", size="md", disabled}: Props){
    const BASE = "px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 cursor-pointer";

    const VARIANT = {
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        secondary:"bg-zinc-200 text-zinc-800 hover:bg-zinc-300"
    };

    const SIZE = {
        sm: "px-3 py-1 text-sm",
        md: "px-4 py-2",
        lg: "px-6 py-3 text-lg",
    };

    return (
        <button
            disabled = {disabled}
            className = {`${BASE} ${VARIANT[variant]} ${SIZE[size]}`}
        >
            {text}
        </button>
    );
}