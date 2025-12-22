type Props = {
    text?: string;
}
export default function Title({text="제목"}: Props){
    return (
        <h3 className="text-3xl font-bold text-gray-900 pl-2 pb-2">
            {text}
        </h3>
    );
}