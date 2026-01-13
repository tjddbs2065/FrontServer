import { keepPreviousData, useQuery } from "@tanstack/react-query";
import type Page from "../../../shared/utils/pageResponse";
import { ListHeader } from "../../../shared/components/list/ListHeader";
import ListForm from "../../../shared/components/list/ListForm";
import { ListBody } from "../../../shared/components/list/ListBody";
import { getItemOrder } from "../api/itemOrderApi";
import type ItemOrder from "../model/ItemOrder";
import { itemOrderColumn } from "../model/ItemOrderColumn";
import type { Column } from "../../../shared/components/list/RowItem";
import InputButton from "../../../shared/components/elements/InputButton";
import { useItemOrderStore } from "../model/ItemOrderStore";

export default function ItemOrderContainer({pageNo, setTotalElem}:{pageNo:number, setTotalElem: (totalNo: number)=>void}){    

    const orderStatus = useItemOrderStore((state)=>state.orderStatus);
    const startDate = useItemOrderStore((state)=>state.startDate);
    const endDate = useItemOrderStore((state)=>state.endDate);
    const searchToken = useItemOrderStore((state)=>state.searchToken);

    const {data:itemOrders, isLoading} = useQuery({
        queryKey: ['itemOrders', pageNo, searchToken],
        queryFn: async ({queryKey}) => {
            const [, pageNo] = queryKey as [string, number];
            const response = await getItemOrder(pageNo, { orderStatus, startDate, endDate});
            const pageData: Page = response.data as Page;
            setTotalElem(pageData.totalElements);
            
            return pageData.content as ItemOrder[];
        },
        placeholderData: keepPreviousData,
    });

    const columns: Column<ItemOrder>[] = [
        ...itemOrderColumn,
        {
            key: "actions" as string,
            label: "처리",
            width: 110,
            render() {
                return (
                    <InputButton text="상세보기" variant="secondary" size="sm"></InputButton>
                );
            }
        }
    ]

    return (
        <ListForm header={<ListHeader columns={columns} />} >
            <ListBody 
                data={itemOrders} 
                columns={columns} 
                isLoading={isLoading && !itemOrders} // keepPreviousData 사용 시 깜빡임 방지
            />
        </ListForm>
    )
}