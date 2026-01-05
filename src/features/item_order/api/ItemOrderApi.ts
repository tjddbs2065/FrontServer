import type ApiResponse from "../../../shared/utils/apiResponse";
import { apiClient } from "../../../shared/utils/axios";
import type ItemOrderItem from "../model/ItemOrderItem";

export const getItemOrderItem = async () => {
    const result = await apiClient.get<ApiResponse<ItemOrderItem>>(`/api/itemOrder/itemList`);
    return {
        data: result.data.data
    };
};




