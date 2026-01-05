import type ApiResponse from "../../../shared/utils/apiResponse";
import { apiClient } from "../../../shared/utils/axios";
import type Page from "../../../shared/utils/pageResponse";

export const getItem = async (pageNo: number) => {
    const result = await apiClient.get<ApiResponse<Page>>(`/api/items/list/${pageNo}`);
    return {
        data: result.data.data
    };
};




