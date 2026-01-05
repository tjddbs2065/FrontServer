import type { Column, Row } from "../../shared/components/list/RowItem";
import type ApiResponse from "../../shared/utils/apiResponse";
import { apiClient } from "../../shared/utils/axios";
import type Page from "../../shared/utils/pageResponse";

export const getItem = async (pageNo: number) => {
    const result = await apiClient.get<ApiResponse<Page>>(`/api/items/list/${pageNo}`);
    return {
        data: result.data.data
    };
};

// Item의 데이터 
export interface Item{
    itemCode: string;
    itemCategory: string;
    itemName: string;
    ingredientName: string;
    stockUnit: string;
    supplyUnit: string;
    supplier: string;
    itemPrice: string;
    convertStock: string;
    storageType: string;
    expiratikonType: string;
    expiration: string;
    note: string;
}


export interface ItemRow extends Row, Item{

}

export const itemColumn: Column<ItemRow>[] = [
    {key: "itemCategory", label: "카테고리"},
    {key: "itemCode", label: "품목코드"},
    {key: "itemName", label: "품목명"},
    {key: "ingredientName", label: "재료명"},
    {key: "supplier", label: "공급사"},
    {key: "itemPrice", label: "공급가격"},
    {key: "note", label: "상세"},
];