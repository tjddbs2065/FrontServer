type Size = "sm" | "md" | "lg" | "xl" | "xxl";
type Style = "bold" | "medium";
type TextProps = {
    text: string;
    size?: Size;
    style?: Style;
}

export default function Text({text, size="md", style="medium"}: TextProps){
        const BASE = "leading-none";
        const SIZE = {
            sm: "text-sm",
            md: "text-md",
            lg: "text-lg",
            xl: "text-xl",
            xxl: "text-2xl",
        };
        const STYLE = {
            bold: "font-bold",
            medium: "font-medium"
        };
    return (
        <span className={`${BASE} ${SIZE[size]} ${STYLE[style]} px-1`}>
            {text}
        </span>
    )
}