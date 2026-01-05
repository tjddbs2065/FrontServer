import type ApiResponse from "../../../shared/utils/apiResponse";
import { apiClient } from "../../../shared/utils/axios";
import type Menu from "../model/Menu";

export const getMenu = async () => {
    const result = await apiClient.get<ApiResponse<Menu[]>>(`/menu/menuList`);
    return {
        data: result.data.data
    };
};
