import InputButton from "../../../shared/components/elements/InputButton";
import Text from "../../../shared/components/elements/Text";
import { ListBody } from "../../../shared/components/list/ListBody";
import ListForm from "../../../shared/components/list/ListForm";
import { ListHeader } from "../../../shared/components/list/ListHeader";
import type { Column } from "../../../shared/components/list/RowItem";
import { useItemOrderStore } from "../model/ItemOrderStore";
import type ItemSelected from "../model/ItemSelected";
import { itemSelectedColumn } from "../model/ItemSelectedColumn";
import useOrderItem from "./hooks/useOrderItems";

export function ItemSelectedContainer(){

    const items = useItemOrderStore(s=>s.selectedItems);
    const removeItem = useItemOrderStore(s => s.removeItem);

    const columns: Column<ItemSelected>[] = [
        ...itemSelectedColumn,
        {
            key: "actions" as string,
            label: "삭제",
            width: 80,
            render: (_item, index) => {
                return (
                    <InputButton 
                        size="sm"
                        text="삭제" 
                        variant="secondary"
                        onClick={() => {removeItem?.(index as number);}}
                    />
                );
            }
        }
    ];

    const totalPrice = items.reduce((sum, item) => sum + (item.itemOrderPrice), 0);
    const totalItem = items.length;
    
    const selectedItems = useItemOrderStore(s=>s.selectedItems);
    const requestItemOrder = useOrderItem();

    return(
        <div className="flex-1 flex flex-col p-2 gap-2">
            <div className="flex flex-row gap-2 items-center">
                <Text style="bold" size="xl" text="선택 품목"/>
            </div>
            <ListForm 
                header={<ListHeader columns={columns} />} 
                tail={
                    <div className="flex flex-row justify-between items-center p-2 border-t border-gray-200">
                        <Text style="bold" text={`총 품목 수 : ${items.length}`} />
                        <Text style="bold" text={`총 발주액 : ${totalPrice.toLocaleString()}원`} />
                        <InputButton text="발주 요청" onClick={()=>{
                            requestItemOrder({totalPrice, totalItem, selectedItems});
                            
                        }}/>
                    </div>
                }>
                <div>
                    <ListBody
                        data={items}
                        columns={columns}
                        isLoading={false}
                        emptyMessage="선택한 품목이 없습니다."
                    />
                </div>
            </ListForm>
        </div>
    );
}