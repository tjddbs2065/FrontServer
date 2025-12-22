import type ApiResponse from "./ApiResponse";
import { apiClient } from "./axios";


export const loginApi = async (data: Partial<User>): Promise<LoginResult> => {
        const response = await apiClient.post<ApiResponse<User>>(`/login`, data);
        
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