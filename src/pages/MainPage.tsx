import PageLayout from "../layouts/ui/PageLayout";
import {HeaderLayout} from "../components/Header";
import { ContentLayout } from "../layouts/ui/ContentLayout";
import Text from "../components/Item/Text";
import InputButton from "../components/Item/InputButton";

export default function MainPage(){
    return (
        <PageLayout 
            header={<HeaderLayout/>}
        >
            <ContentLayout title="품목 조회">
                <div className="w-full h-20 border border-gray-200 rounded-lg p-1 flex flex-row justify-start shadow-sm gap-5">
                    <div className="flebetween">
                    <div className="w-40 h-full p-1 flex flex-col">
                        <Text text="카테고리" style="bold" />
                        <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
                            <option>피자</option>
                            <option>사이드디시</option>
                            <option>음료</option>
                            <option>기타</option>
                        </select>
                    </div>
                    <div className="w-40 h-full p-1 flex flex-col">
                        <Text text="출시상태" style="bold" />
                        <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
                            <option>선택</option>
                            <option>출시예정</option>
                            <option>출시 중</option>
                            <option>출시중단</option>
                        </select>
                    </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <InputButton text="목록" />
                        <InputButton text="이미지" />
                    </div>
                </div>
            </ContentLayout>

        </PageLayout>
    );
}