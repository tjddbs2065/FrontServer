import type { FieldErrors, UseFormRegister } from "react-hook-form";
import InputButton from "../Common/Elements/InputButton";
import Text from "../Common/Elements/Text";
import InputText from "../Common/Elements/InputText";
import type { LoginFormValues } from "./LoginContainer";


interface LoginFormProps{
    register: UseFormRegister<LoginFormValues>
    onSubmit: () => Promise<void>;
    errors: FieldErrors<LoginFormValues>
}

export default function LoginForm({ register, onSubmit, errors }: LoginFormProps){
    return (
        <div className="flex flex-col items-center gap-5 bg-white rounded-2xl border border-gray-300 shadow-xl p-30">
            <img className="w-32 h-32 bg-rmfjagray-200 rounded-md"></img>
            <Text text="로그인" size="xxl"/>
            <form onSubmit={onSubmit}>
                <div className="flex flex-col gap-2">
                    <InputText text="아이디" {...register("managerId", {required:"아이디를 입력해주세요"})}/>

                    <InputText text="비밀번호" type="password" {...register("pw", {required: "비밀번호를 입력해주세요"})} />
                    {errors.pw && <span className="text-red-500 text-sm">{errors.pw.message as string}</span>}
                    <InputButton text="로그인" type="submit" />
                </div>
            </form>
        </div>
    );
}