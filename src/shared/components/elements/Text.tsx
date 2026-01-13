type Size = "sm" | "md" | "lg" | "xl" | "xxl";
type Style = "bold" | "medium" | "small";
type Color = "green" | "red" | "yellow" | "black";
type TextProps = {
    text: string;
    size?: Size;
    style?: Style;
    color?: Color;
}


export default function Text({text, size="md", style="small", color="black"}: TextProps){
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
            medium: "font-medium",
            small: "font-small"
        };
        const COLOR = {
            green: "text-green-600",
            yellow: "text-yellow-500",
            red: "text-red-500",
            black: "text-black"
        };
    return (
        <span className={`${BASE} ${SIZE[size]} ${STYLE[style]} ${COLOR[color]} px-1`}>
            {text}
        </span>
    )
}