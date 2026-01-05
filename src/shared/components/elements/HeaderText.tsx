type Size = "sm" | "md" | "lg" | "xl";
type Props = {
    text: string;
    size?: Size;
}

export default function HeaderText({text, size="lg"}: Props){
        const BASE = "font-bold cursor-pointer";
        const SIZE = {
            sm: "text-sm",
            md: "text-md",
            lg: "text-lg",
            xl: "text-xl",
        };
    return (
        <span className={`${BASE} ${SIZE[size]}`}>
            {text}
        </span>
    )
}