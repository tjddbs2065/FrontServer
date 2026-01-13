import Text from "./Text";

interface FilterElementProps{
    text: string,
    children: React.ReactNode;
}

export default function FilterElement(filterInfo: FilterElementProps){
    return(
        <div className="h-full p-2 flex flex-col gap-2">
            <div className="min-h-[20px]">
                <Text text={filterInfo.text} style="bold" />
            </div>
            <div className="flex flex-row gap-1">
                {filterInfo.children}
            </div>
        </div>
    );
}