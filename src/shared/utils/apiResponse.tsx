export default interface ApiResponse<T>{
    success: boolean;
    data: T;
    error?: {
        errorCode?: string;
        errorMessage?: string;
    };
}