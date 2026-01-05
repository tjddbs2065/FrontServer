import { useState } from "react";
import { ItemContainer } from "./ItemContainer";
import PageLayout from "../../shared/layouts/ui/PageLayout";
import { PageContainer } from "../../shared/layouts/ui/PageForm";
import { ContentLayout } from "../../shared/layouts/ui/ContentLayout";
import { HeaderLayout } from "../../shared/components/Header";
import CategoryContainer from "../../shared/components/list/CategoryForm";
import FilterElement from "../../shared/components/elements/FilterElement";
import Selector from "../../shared/components/elements/Selector";
import InputButton from "../../shared/components/elements/InputButton";
import InputText from "../../shared/components/elements/InputText";
import PaginatinoContainer from "../../shared/components/PaginationForm";


export default function ItemPage(){
    const [pageNo, setPage] = useState(1);
    const [totalElem, setTotalElem] = useState(1);

    return (
        <PageLayout 
            header={<HeaderLayout/>}
        >
            <PageContainer>
                <ContentLayout title="품목 조회">
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
                                <FilterElement text="검색어">
                                    <InputText text="검색어 입력"/>
                                    <InputButton text="검색" />
                                </FilterElement>
                            </div>
                            <div className="flex flex-row">
                                <FilterElement text="보기">
                                    <InputButton text="목록" />
                                    <InputButton text="이미지" variant="secondary"/>
                                </FilterElement>
                            </div>
                        </CategoryContainer>

                        <ItemContainer pageNo = {pageNo} totalElem={setTotalElem} />

                        <PaginatinoContainer pageSize={10} totalCount={totalElem} currentPage={pageNo} onPageChange={setPage} />
                    </>
                </ContentLayout>
            </PageContainer>
        </PageLayout>
    );
}