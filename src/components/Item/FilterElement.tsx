import Text from "./Text";

interface FilterElementProps{
    text: string,
    children: React.ReactNode;
}

export default function FilterElement(filterInfo: FilterElementProps){
    return(
        <div className="w-40 h-full p-1 flex flex-col">
            <Text text={filterInfo.text} style="bold" />
            <div>
                {filterInfo.children}
            </div>
        </div>
    );
}