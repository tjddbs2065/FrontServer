import type { Column, Row } from "../../shared/components/list/RowItem";
import type ApiResponse from "../../shared/utils/apiResponse";
import { apiClient } from "../../shared/utils/axios";

export const getMenu = async () => {
    const result = await apiClient.get<ApiResponse<Menu[]>>(`/menu/menuList`);
    return {
        data: result.data.data
    };
};

export interface Menu{
    menuNo: number;
    menuName: string;
    menuCode: string;
    menuCategory: string;
    menuExplain: string;
    size: string;
    menuPrice: string;
    releaseStatus: string;
    inDate: string;
    editDate: string;
    delDate: string;
    menuPriceLarge: number;
    menuPriceMedium: number;
}

// Menu의 데이터 
export interface MenuRow extends Row, Menu{
}

export const menuColumn:Column<MenuRow>[] = [
    {key: "menuCode", label: "메뉴코드"},
    {key: "menuCategory", label: "카테고리"},
    {key: "menuName", label: "메뉴명"},
    {key: "menuPrice", label: "판매가격", render: (value) => `${value?.toLocaleString()}원`},
    {key: "releaseStatus", label: "판매상태"},
];