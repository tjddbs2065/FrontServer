import type { Item } from "../../../utils/itemApi";

// 칼럼 하나의 객체를 의미(key: label 형태)
export interface Column<T>{
    key: keyof T;
    label: string;
    render?: (value: T[keyof T]) => React.ReactNode;
}
interface Row{
    id: number;
    name: string;
}
// Menu의 데이터 
export interface MenuRow extends Row{
    code: string;
    category: string;
    price: number;
    status: string;
}
export interface ItemRow extends Row, Item{

}

export const itemColumn: Column<ItemRow>[] = [
    {key: "itemCategory", label: "카테고리"},
    {key: "itemCode", label: "품목코드"},
    {key: "itemName", label: "품목명"},
    {key: "ingredientName", label: "재료명"},
    {key: "itemSupplier", label: "공급사"},
    {key: "itemPrice", label: "공급가격"},
    {key: "note", label: "상세"},
];

export const menuColumn:Column<MenuRow>[] = [
    {key: "code", label: "메뉴코드"},
    {key: "category", label: "카테고리"},
    {key: "name", label: "메뉴명"},
    {key: "price", label: "판매가격", render: (value) => `${value.toLocaleString()}원`},
    {key: "status", label: "판매상태"},
];