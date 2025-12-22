import type { Item } from "../../../utils/itemApi";

export interface ListFormProps{
    header: React.ReactNode;
    items: Item[] | undefined;
}

export default function ListForm({header, items}: ListFormProps){
    return (
        <div className="w-full flex-1 border border-gray-200 rounded-lg flex flex-col justify-start shadow-sm overflow-hidden min-h-0">
            {header}
            <div className="flex-1 flex flex-col overflow-y-auto gap-4 pt-4">
            {/* 추후 데이터 넣어줘야 하는 부분 */}
            {
                items?.map((item)=>{item.itemName})
            }
            </div>
        </div>
    );
}