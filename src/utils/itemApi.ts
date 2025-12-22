import type { Page } from "../components/Item/ItemContainer";
import type ApiResponse from "./ApiResponse";
import { apiClient } from "./axios";

export const getItem = async (pageNo: number) => {
    const result = await apiClient.get<ApiResponse<Page>>(`/api/items/list/${pageNo}`);
    return {
        data: result.data.data
    };
};

// export const updateItem = (userId: number, data: Partial<>) => {
//     return apiClient.put(`/item/${userId}`, data);
// }


// Item의 데이터 
export interface Item{
    itemCode: string;
    itemCategory: string;
    itemName: string;
    ingredientName: string;
    stockUnit: string;
    supplyUnit: string;
    itemSupplier: string;
    itemPrice: string;
    convertStock: string;
    storageType: string;
    expiratikonType: string;
    expiration: string;
    note: string;
}