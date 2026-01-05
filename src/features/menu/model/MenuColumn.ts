import type { Column, Row } from "../../../shared/components/list/RowItem";
import type Menu from "./Menu";

// Menu의 데이터 
export interface MenuRow extends Row, Menu{
}

export const menuColumn:Column<Menu>[] = [
    {key: "menuCode", label: "메뉴코드"},
    {key: "menuCategory", label: "카테고리"},
    {key: "menuName", label: "메뉴명"},
    {key: "menuPrice", label: "판매가격", render: (value) => `${value?.toLocaleString()}원`},
    {key: "releaseStatus", label: "판매상태"},
];