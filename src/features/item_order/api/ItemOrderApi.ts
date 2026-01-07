import type ApiResponse from "../../../shared/utils/apiResponse";
import { apiClient } from "../../../shared/utils/axios";
import type ItemOrderItem from "../model/ItemOrderItem";

export const getItemOrderItem = async () => {
    const result = await apiClient.get<ApiResponse<ItemOrderItem>>(`/api/itemOrder/itemList`);
    return {
        data: result.data.data
    };
};

export const getItemProposal = async () => {
    const result = await apiClient.get<ApiResponse<ItemOrderItem>>(`/api/itemOrder/itemProposal`);
    return {
        data: result.data.data
    };
};

export const respondProposal = async (proposalNo: number) => {
    const result = await apiClient.put<ApiResponse<void>>(`/api/itemOrder/respondItemProposal/${proposalNo}`);
    return {
        data: result.data
    };
};

export const requestItemOrder = async ({totalPrice, totalItem, selectedItems} : {totalPrice: number, totalItem: number, selectedItems: ItemOrderItem[]}) => {
    const data = { totalPrice, totalItem, orderList: selectedItems };
    const result = await apiClient.post<ApiResponse<void>>(`/api/itemOrder/itemOrder`, data);
    return {
        data: result.data
    };
}