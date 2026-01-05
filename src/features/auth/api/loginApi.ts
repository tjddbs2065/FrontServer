import type ApiResponse from "../../../shared/utils/apiResponse";
import { useAuthStore } from "../model/AuthStore";
import { apiClient } from "../../../shared/utils/axios";
import type { LoginResult } from "../model/LoginResult";
import type User from "../../../shared/model/User";

export const loginApi = async (data: Partial<User>): Promise<LoginResult> => {
        const response = await apiClient.post<ApiResponse<User>>(`/login`, data); // 실패 시 에러 throw
        
        const token = response.headers["authorization"];        
        useAuthStore.getState().login(token); // 토큰 저장이 완료된 후 상태 변경 알림
        
        return {
            data: response.data.data,
            token,
        }
};