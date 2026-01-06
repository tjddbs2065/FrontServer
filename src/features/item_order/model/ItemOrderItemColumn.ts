import type { Column } from "../../../shared/components/list/RowItem";
import type ItemOrderItem from "./ItemOrderItem";

export const itemOrderItemColumn: Column<ItemOrderItem>[] = [
    {key: "itemCode", label: "품목코드"},
    {key: "itemName", label: "품목명"},
    {key: "itemCategory", label: "카테고리"},
    {key: "storeLimit", label: "하한선", render: (item)=> {
        const qty = item.storeLimit ?? 0;
        const unit = item.stockUnit ?? "";
        
        return `${qty.toLocaleString()} ${unit}`;
    }},
    {key: "itemQuantity", label: "재고수량", render: (item)=> {
        const qty = item.itemQuantity ?? 0;
        const unit = item.stockUnit ?? "";
        
        return `${qty.toLocaleString()} ${unit}`;
    }},
    {key: "supplyUnit", label: "공급단위", render: (item)=> {
        const unit = item.supplyUnit ?? "";
        const qtyPerUnit = item.convertStock ?? "";
        const stockUnit = item.stockUnit ?? "";

        return `1${unit} (${qtyPerUnit}${stockUnit})`;
    }},
    {key: "itemPrice", label: "공급가격", render: (item)=> item.itemPrice ? item.itemPrice.toLocaleString()+"원" : "-"},
];