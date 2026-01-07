import type { Column } from "../../../shared/components/list/RowItem";
import type ItemSelected from "./ItemSelected";

export const itemSelectedColumn: Column<ItemSelected>[] = [
    {key: "itemName", label: "품목명", width: "fill"},
    {key: "supplyUnit", label: "공급단위", 
        render: (item) => {
            const unit = item.supplyUnit ?? "";
            const qtyPerUnit = item.convertStock ?? "";
            const stockUnit = item.stockUnit ?? "";

            return `1 ${unit} (${qtyPerUnit}${stockUnit})`;
        }, 
        width: 160 },
    {key: "quantity", label: "수량", render: (item) => `${(item.itemQuantity ?? 1).toLocaleString()} 개`, width: 100},
    {key: "totalPrice", label: "금액", render: (item) => `${(item.itemOrderPrice ?? 0).toLocaleString()} 원`, width: 150},
];