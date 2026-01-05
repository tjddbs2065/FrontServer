import { HeaderLayout } from "../../shared/components/Header";
import CategoryContainer from "../../shared/components/list/CategoryForm";
import FilterElement from "../../shared/components/elements/FilterElement";
import Selector from "../../shared/components/elements/Selector";
import InputButton from "../../shared/components/elements/InputButton";
import { MenuContainer } from "./MenuContainer";
import PageLayout from "../../shared/layouts/ui/PageLayout";
import { PageContainer } from "../../shared/layouts/ui/PageForm";
import { ContentLayout } from "../../shared/layouts/ui/ContentLayout";


export default function MenuPage(){
    return (
        <PageLayout 
            header={<HeaderLayout/>}
        >
            <PageContainer>
                <ContentLayout title="메뉴 조회">
                    {/* 추후 데이터 넣어줘야 하는 부분 */}
                    <>
                        <CategoryContainer>                
                            <div className="flex flex-row">
                                <FilterElement text="카테고리">
                                    <Selector contents={["피자", "사이드디시", "음료", "기타"]}/>
                                </FilterElement>
                                <FilterElement text="출시상태">
                                    <Selector contents={["선택", "출시예정", "출시 중", "출시중단"]}/>
                                </FilterElement>
                            </div>
                            <div className="flex flex-row">
                                <FilterElement text="보기">
                                    <InputButton text="목록"/>
                                    <InputButton text="이미지" variant="secondary"/>
                                </FilterElement>
                            </div>
                        </CategoryContainer>

                        <MenuContainer />
                    </>
                </ContentLayout>
            </PageContainer>
        </PageLayout>
    );
}