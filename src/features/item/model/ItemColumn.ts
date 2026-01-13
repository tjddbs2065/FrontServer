import type { Column } from "../../../shared/components/list/RowItem";
import type Item from "./Item";

export const itemColumn: Column<Item>[] = [
    {key: "itemCategory", label: "카테고리"},
    {key: "itemCode", label: "품목코드"},
    {key: "itemName", label: "품목명"},
    {key: "ingredientName", label: "재료명"},
    {key: "supplier", label: "공급사"},
    {key: "itemPrice", label: "공급가격", render: (item)=>item?.itemPrice?.toLocaleString() + " 원"},
    {key: "note", label: "상세", render: (item) => item?.note || "-" },
];