import PageLayout from "../../layouts/ui/PageLayout";
import {HeaderLayout} from "../Header";
import { ContentLayout } from "../../layouts/ui/ContentLayout";
import { PageContainer } from "../../layouts/ui/PageForm";
import CategoryContainer from "../Common/List/CategoryForm";
import PaginatinoContainer from "../PaginationContainer";
import { useState } from "react";
import FilterElement from "../Common/Elements/FilterElement";
import Selector from "../Common/Elements/Selector";
import InputButton from "../Common/Elements/InputButton";
import InputText from "../Common/Elements/InputText";
import { getItem } from "../../utils/itemApi";
import { ItemContainer } from "./ItemContainer";

export default function ItemPage(){
    const [page, setPage] = useState(1);

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
                                    <InputButton text="목록" onClick={()=>{getItem(1)}}/>
                                    <InputButton text="이미지" variant="secondary"/>
                                </FilterElement>
                            </div>
                        </CategoryContainer>
                        <ItemContainer/>

                        <PaginatinoContainer pageSize={10} totalCount={128} currentPage={page} onPageChange={setPage} />
                    </>
                </ContentLayout>
            </PageContainer>
        </PageLayout>
    );
}