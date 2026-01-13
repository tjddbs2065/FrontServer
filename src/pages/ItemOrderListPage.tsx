import { useState } from "react";
import PageLayout from "../shared/layouts/ui/PageLayout";
import { PageContainer } from "../shared/layouts/ui/PageForm";
import { ContentLayout } from "../shared/layouts/ui/ContentLayout";
import { HeaderLayout } from "../shared/components/Header";
import CategoryContainer from "../shared/components/list/CategoryForm";
import FilterElement from "../shared/components/elements/FilterElement";
import Selector from "../shared/components/elements/Selector";
import InputButton from "../shared/components/elements/InputButton";
import InputText from "../shared/components/elements/InputText";
import PaginationContainer from "../shared/components/pagination/PaginationContainer";
import ItemOrderContainer from "../features/item_order_list/ui/ItemOrderContainer";
import { useItemOrderStore } from "../features/item_order_list/model/ItemOrderStore";


export default function ItemOrderListPage(){
    const [pageNo, setPage] = useState(1);
    const [totalElem, setTotalElem] = useState(1);

    const setOrderStatus = useItemOrderStore((state)=>state.setOrderStatus);
    const setStartDate = useItemOrderStore((state)=>state.setStartDate);
    const setEndDate = useItemOrderStore((state)=>state.setEndDate);
    const triggerSearch = useItemOrderStore((state)=>state.triggerSearch);


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
                                <FilterElement text="발주상태">
                                    <Selector contents={["전체", "대기", "승인", "취소"]} onSelect={setOrderStatus}/>
                                </FilterElement>
                                <FilterElement text="시작날짜">
                                    <InputText placeholder="검색어 입력" type="date" onTextChange={setStartDate}/>
                                </FilterElement>
                                <FilterElement text="종료날짜">
                                    <InputText placeholder="검색어 입력" type="date" onTextChange={setEndDate}/>
                                </FilterElement>
                                <FilterElement text="">
                                    <InputButton text="조회" onClick={()=>{triggerSearch(); setPage(1);}}/>
                                </FilterElement>
                            </div>
                        </CategoryContainer>

                        <ItemOrderContainer pageNo = {pageNo} setTotalElem={setTotalElem} />

                        <PaginationContainer pageSize={10} totalCount={totalElem} currentPage={pageNo} onPageChange={setPage} />
                    </>
                </ContentLayout>
            </PageContainer>
        </PageLayout>
    );
}