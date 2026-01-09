interface SelectorProps{
    contents?: string[];
    onSelect?: (value: string) => void;
}

export default function Selector({ contents, onSelect }: SelectorProps){
    return (
        <div className="relative inline-block w-40">
            <select 
                className="border border-gray-300 rounded-md px-4 py-2 pr-10 text-md w-full appearance-none"
                onChange={(e)=>{onSelect?.(e.target.value)}}
            >
                {contents?.map(
                        item=> (
                            <option key={item}>{item}</option>
                        )
                    )
                }
            </select>
            {/* select에 아래 방향 화살표 이미지 그려주기 */}
            <svg
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path d="M5.5 7.5L10 12l4.5-4.5" />
            </svg>
        </div>
    );
}