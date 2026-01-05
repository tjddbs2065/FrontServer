import Text from "./Text";

interface FilterElementProps{
    text: string,
    children: React.ReactNode;
}

export default function FilterElement(filterInfo: FilterElementProps){
    return(
        <div className="h-full p-2 flex flex-col gap-2">
            <Text text={filterInfo.text} style="bold" />
            <div className="flex flex-row gap-1">
                {filterInfo.children}
            </div>
        </div>
    );
}