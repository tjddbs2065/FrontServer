import PageLayout from "../shared/layouts/ui/PageLayout";
import { PageContainer } from "../shared/layouts/ui/PageForm";
import { ContentLayout } from "../shared/layouts/ui/ContentLayout";
import { HeaderLayout } from "../shared/components/Header";
import { ItemOrderItemContainer } from "../features/item_order/ui/ItemOrderContainer";


export default function ItemOrderPage(){
    return (
        <PageLayout 
            header={<HeaderLayout/>}
        >
            <PageContainer>
                <ContentLayout title="발주">
                    {/* 추후 데이터 넣어줘야 하는 부분 */}
                    <div className="flex flex-1 flex-row overflow-y-hidden">
                        <ItemOrderItemContainer />
                        <ItemOrderItemContainer />
                    </div>
                    <div className="flex flex-1 overflow-y-hidden">
                        <ItemOrderItemContainer />
                    </div>
                </ContentLayout>
            </PageContainer>
        </PageLayout>
    );
}