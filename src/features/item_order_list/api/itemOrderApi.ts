import type ApiResponse from "../../../shared/utils/apiResponse";
import { apiClient } from "../../../shared/utils/axios";
import type Page from "../../../shared/utils/pageResponse";

export const getItemOrder = async (pageNo: number, data: {orderStatus?: string, startDate?: string, endDate?: string}) => {
    const result = await apiClient.get<ApiResponse<Page>>(`/api/itemOrder/itemOrderList/${pageNo}`, {params: data}); 
    return {
        data: result.data.data
    };
};




