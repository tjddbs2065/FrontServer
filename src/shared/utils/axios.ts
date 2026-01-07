import axios from "axios";
import { useAuthStore } from "../../features/auth/model/AuthStore";

const getToken = (): string|null =>{
    return localStorage.getItem("accessToken");
}

export const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    }
});

// 요청 시 전처리
apiClient.interceptors.request.use(
    config => {
        const token = getToken();
        if(token){
            config.headers.Authorization = `${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

// 응답 시 전처리
apiClient.interceptors.response.use(
    // 정상일 경우 그대로 response 전달
    response => response,

    // 실패(4xx, 5xx)일 경우 응답에 포함되어 있는 에러 객체를 가져옴
    error => {
        const {status, data} = error.response;

        // 인증 에러
        if(status === 401){
            useAuthStore.getState().logout();
        }

        // 비지니스 로직 에러(ApiResponse 규격 에러) - ApiResponse에 type과 status를 담아 반환
        if(data?.success === false && data?.error) {
            return Promise.reject({
                ...data.error,
                status,
                type: "BUSINESS_ERROR",
            });
        }
        
        // 시스템 에러
        return Promise.reject({
            type: "SYSTEM_ERROR",
            status,
            message: "서버 에러가 발생했습니다.",
        });
    }
);