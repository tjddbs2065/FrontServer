import InputText from "../components/Item/InputText";
import InputButton from "../components/Item/InputButton";
import PageLayout from "../layouts/ui/PageLayout";

export default function LoginPage(){
    return (
        <PageLayout bodyAlign="center">
            <div className="flex flex-col flex-1 gap-6">
                <div className="flex flex-row items-center justify-center">
                    <img className="w-32 h-32 bg-gray-200 rounded-md"></img>
                </div>
                <div className="flex items-center justify-center text-xl">로그인</div>
                <div className="flex flex-col items-center gap-2">
                    <InputText placeholder="아이디"/>
                    <InputText placeholder="비밀번호"/>
                    <InputButton text="로그인"/>
                </div>
            </div>
        </PageLayout>
    );
}