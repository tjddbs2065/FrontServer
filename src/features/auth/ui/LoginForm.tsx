import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { LoginFormValues } from "./LoginContainer";
import Text from "../../../shared/components/elements/Text";
import InputText from "../../../shared/components/elements/InputText";
import InputButton from "../../../shared/components/elements/InputButton";


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
                    <InputText placeholder="아이디" {...register("managerId", {required:"아이디를 입력해주세요"})}/> {/*유효성 검사 등록*/}
                    {errors.managerId && <span className="text-red-500 text-sm">{errors.managerId.message as string}</span>}

                    <InputText placeholder="비밀번호" type="password" {...register("pw", {required: "비밀번호를 입력해주세요", minLength:{ value:4, message:"비밀번호는 4자 이상이어야 합니다."}})} />
                    {errors.pw && <span className="text-red-500 text-sm">{errors.pw.message as string}</span>}
                    
                    <InputButton text="로그인" type="submit" />
                </div>
            </form>
            {errors.root && <span className="text-red-500 text-sm">{errors.root.message as string}</span>}
        </div>
    );
}