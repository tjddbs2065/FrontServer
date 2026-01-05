import type { Column } from "../../../shared/components/list/RowItem";
import type ItemOrderItem from "./ItemOrderItem";

export const itemOrderItemColumn: Column<ItemOrderItem>[] = [
    {key: "itemCode", label: "품목코드"},
    {key: "itemName", label: "품목명"},
    {key: "itemCategory", label: "카테고리"},
    {key: "storeLimit", label: "하한선", render: (value, row)=> {
        const qty = value ?? 0;
        const unit = (row as any).stockUnit ?? "";
        
        return `${qty.toLocaleString()} ${unit}`;
    }},
    {key: "itemQuantity", label: "재고수량", render: (value, row)=> {
        const qty = value ?? 0;
        const unit = (row as any).stockUnit ?? "";
        
        return `${qty.toLocaleString()} ${unit}`;
    }},
    {key: "supplyUnit", label: "공급단위", render: (value, row)=> {
        const unit = value ?? "";
        const qtyPerUnit = (row as any).convertStock ?? "";
        const stockUnit = (row as any).stockUnit ?? "";

        return `1${unit} (${qtyPerUnit}${stockUnit})`;
    }},
    {key: "itemPrice", label: "공급가격", render: (value)=> value ? value.toLocaleString()+"원" : "-"},
];