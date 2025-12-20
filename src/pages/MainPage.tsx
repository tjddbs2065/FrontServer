import PageLayout from "../layouts/ui/PageLayout";
import {HeaderLayout} from "../components/Header";
import { ContentLayout } from "../layouts/ui/ContentLayout";
import { PageContainer } from "../layouts/ui/PageContainer";
import CategoryContainer from "../components/Forms/CategoryContainer";
import ListContainer from "../components/List/ListContainer";
import PaginatinoContainer from "../components/PaginationContainer";
import { useState } from "react";

export default function MainPage(){
    const [page, setPage] = useState(1);
    return (
        <PageLayout 
            header={<HeaderLayout/>}
        >
            <PageContainer>
                <ContentLayout title="품목 조회">
                    <>
                        <CategoryContainer />
                        <ListContainer />
                        {/* 추후 데이터 넣어줘야 하는 부분 */}
                        <PaginatinoContainer pageSize={10} totalCount={128} currentPage={page} onPageChange={setPage} />
                    </>
                </ContentLayout>
            </PageContainer>
        </PageLayout>
    );
}