import { useForm, type FieldValues } from "react-hook-form";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import { loginApi } from "./loginApi";

export interface LoginFormValues{
    managerId: string;
    pw: string;
}
export interface error{
    errorCode: string;
    errorMessage: string;
}
export default function LoginContainer(){
    const {register, handleSubmit, formState: {errors}} = useForm<LoginFormValues>();
    const navigate = useNavigate();
    
    // loginApi에서 promise를 반환하기에 비동기 처리 필수(promise: 지금은 값이 없지만, 나중에 값이 생길 것을 약속하는 객체)
    const onValid = async (data: FieldValues) => {
        try{
            const result = await loginApi(data);
            console.log("로그인 성공!", result);
            
            localStorage.setItem("accessToken", result.token);

            navigate("/item");
        }
        catch(error: unknown){
            console.error("로그인 실패", error);
        }
    }

    return (
        <LoginForm
            register={register}
            onSubmit={handleSubmit(onValid)}
            errors={errors}
        />
    )
}