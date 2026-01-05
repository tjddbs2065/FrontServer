import { useForm } from "react-hook-form";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../api/loginApi";
import type User from "../../../shared/model/User";

export default function LoginContainer(){
    // isSubmitting: 비동기 작업(onValid)이 진행 중일 때 true가 됨
    const {register, handleSubmit, setError, formState: {errors}} = useForm<LoginFormValues>();
    const navigate = useNavigate();
    
    // loginApi에서 promise를 반환하기에 비동기 처리 필수(promise: 지금은 값이 없지만, 나중에 값이 생길 것을 약속하는 객체)
    const onValid = async (data: User) => {
        try{
            // const result = 
            await loginApi(data);
            // console.log("로그인 성공!", result);
            navigate("/item");
        }
        catch(error: unknown){ // http status code가 200이 아닐 때 에러 처리
            console.error("로그인 실패", error); 
            setError("root", { type: "server", message: "아이디 또는 비밀번호가 올바르지 않습니다."});
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

export interface LoginFormValues{
    managerId: string;
    pw: string;
}