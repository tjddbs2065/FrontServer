import PageLayout from "../layouts/ui/PageLayout";
import {HeaderLayout} from "../components/Header";
import { ContentLayout } from "../layouts/ui/ContentLayout";
import { PageContainer } from "../layouts/ui/PageForm";
import CategoryContainer from "../components/Common/List/CategoryForm";
import ListForm from "../components/Common/List/ListForm";
import PaginatinoContainer from "../components/PaginationContainer";
import { useState } from "react";
import FilterElement from "../components/Common/Elements/FilterElement";
import Selector from "../components/Common/Elements/Selector";
import InputButton from "../components/Common/Elements/InputButton";

export default function MenuPage(){
    const [page, setPage] = useState(1);
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
                        <ListForm />
                        <PaginatinoContainer pageSize={10} totalCount={128} currentPage={page} onPageChange={setPage} />
                    </>
                </ContentLayout>
            </PageContainer>
        </PageLayout>
    );
}