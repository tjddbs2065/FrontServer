import type ApiResponse from "../../shared/utils/apiResponse";
import { useAuthStore } from "../../shared/utils/AuthStore";
import { apiClient } from "../../shared/utils/axios";


export const loginApi = async (data: Partial<User>): Promise<LoginResult> => {
        const response = await apiClient.post<ApiResponse<User>>(`/login`, data);
            useAuthStore.getState().login();
        
        const token = response.headers["authorization"];
        
        return {
            data: response.data.data,
            token,
        }
};

export interface LoginResult {
  data: unknown;
  token: string;
}
export interface User{
    managerId: string;
    pw: string;
}