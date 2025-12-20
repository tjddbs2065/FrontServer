import InputButton from "../Item/InputButton";
import InputText from "../Item/InputText";
import Text from "../Item/Text";


export default function LoginForm(){
    return (
        <div className="flex flex-col items-center gap-5 bg-white rounded-2xl border border-gray-300 shadow-xl p-30">
            <img className="w-32 h-32 bg-gray-200 rounded-md"></img>
            <Text text="로그인" size="xxl"/>
            <div className="flex flex-col gap-2">
                <InputText placeholder="아이디"/>
                <InputText placeholder="비밀번호"/>
                <InputButton text="로그인"/>
            </div>
        </div>
    );
}