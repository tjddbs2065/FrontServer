interface SelectorProps{
    contents?: string[];
}

export default function Selector({ contents }: SelectorProps){
    return (
        <select className="border border-gray-300 rounded-md px-3 py-2 text-sm w-36">
            {contents?.map(
                    item=> (
                        <option key={item}>{item}</option>
                    )
                )
            }
        </select>
    );
}