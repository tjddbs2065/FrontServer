type Props = {
    placeholder: string;
    disabled?: boolean;
}
export default function InputText({placeholder, disabled}: Props){
    const base = "border border-gray-300 p-2 rounded-lg";
    return (
        <input 
            disabled = {disabled}
            className = {base}
            placeholder = {placeholder}
        />
    );
}