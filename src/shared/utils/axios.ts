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
)

// 응답 시 전처리
apiClient.interceptors.response.use(
    // 정상일 경우 그대로 response 전달
    response => {
        return response;
    },
    // 실패(4xx, 5xx)일 경우 응답에 포함되어 있는 에러 객체를 가져옴
    error => {
        const apiError = error?.response?.data?.error;

        // 인증 에러 시 이벤트 발생
        if(error.response?.status === 401){
            alert("세션이 만료되었습니다.");
            useAuthStore.getState().logout();
        }

        // 서버 에러가 있을 경우 사용
        if(apiError) {
            return Promise.reject(apiError);
        }
        // 서버 에러가 없을 경우 그냥 전달
        return Promise.reject(error);
    }
)