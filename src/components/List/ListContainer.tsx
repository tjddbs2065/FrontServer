import { ListBody } from "./ListBody";
import { ListHeader } from "./ListHeader";

export interface Column<T>{
    key: keyof T;
    label: string;
    render?: (value: T[keyof T]) => React.ReactNode;
}

export interface MenuRow{
    id: number;
    code: string;
    category: string;
    name: string;
    price: number;
    status: string;
}
const menuColumn:Column<MenuRow>[] = [
    {key: "code", label: "메뉴코드"},
    {key: "category", label: "카테고리"},
    {key: "name", label: "메뉴명"},
    {key: "price", label: "판매가격", render: (value) => `${value.toLocaleString()}원`},
    {key: "status", label: "판매상태"},
];

const menuRow1: MenuRow = {
    id: 1,
    code: "menu-1",
    category: "음식",
    name: "햄버거",
    price: 14000,
    status: "판매중"
}
const menuRow2: MenuRow = 
{
    id: 2,
    code: "menu-2",
    category: "음식",
    name: "피자",
    price: 24000,
    status: "판매중단"
}

export default function ListContainer(){
    const menuRows: MenuRow[] = [menuRow1, menuRow2, menuRow1, menuRow2, menuRow2];
    return (
        <div className="w-full flex-1 border border-gray-200 rounded-lg flex flex-col justify-start shadow-sm overflow-hidden min-h-0">
            <ListHeader columns={menuColumn} />

            <div className="flex-1 flex flex-col overflow-y-auto gap-4 pt-4">
            {/* 추후 데이터 넣어줘야 하는 부분 */}
                <ListBody columns={menuColumn} rows={menuRows}/>
                <ListBody columns={menuColumn} rows={menuRows}/>
            </div>
        </div>
    );
}