type Props = {
    text?: string;
}
export default function Title({text="제목"}: Props){
    return (
        <h3 className="text-3xl font-bold text-gray-900">
            {text}
        </h3>
    );
}