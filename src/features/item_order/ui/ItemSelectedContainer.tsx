import InputButton from "../../../shared/components/elements/InputButton";
import InputText from "../../../shared/components/elements/InputText";
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

    const selectedItems = useItemOrderStore(s=>s.selectedItems);
    const changeQuantity = useItemOrderStore(s=>s.changeQuantity);
    const removeItem = useItemOrderStore(s => s.removeItem);

    const columns: Column<ItemSelected>[] = itemSelectedColumn.map(col => {
        if(col.key === "quantity"){
            return {
                ...col,
                render: (item, index) => {
                    return (
                        <InputText sizeType="xs" type="number" value={item?.itemQuantity?.toString() ?? ""} onChange={(e)=>{
                            if(e.target.value < "1") { alert("수량은 1 이상이어야 합니다."); e.target.value = "1"; return;}
                            changeQuantity(index as number, Number(e.target.value));
                        }}></InputText>)
                }
            }
        }
        return col;
    });
    columns?.push(
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
    );  

    const totalPrice = selectedItems.reduce((sum, item) => sum + (item.itemOrderPrice * item.itemQuantity), 0);
    const totalItem = selectedItems.length;
    
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
                        <Text style="bold" text={`총 품목 수 : ${selectedItems.length}`} />
                        <Text style="bold" text={`총 발주액 : ${totalPrice.toLocaleString()}원`} />
                        <InputButton text="발주 요청" onClick={()=>{
                            if(selectedItems.length === 0) {
                                alert("선택한 품목이 없습니다.");
                                return;
                            }
                            requestItemOrder({totalPrice, totalItem, selectedItems});
                            
                        }}/>
                    </div>
                }>
                <div>
                    <ListBody
                        data={selectedItems}
                        columns={columns}
                        isLoading={false}
                        emptyMessage="선택한 품목이 없습니다."
                    />
                </div>
            </ListForm>
        </div>
    );
}