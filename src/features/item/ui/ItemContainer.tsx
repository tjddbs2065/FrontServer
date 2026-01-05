import { keepPreviousData, useQuery } from "@tanstack/react-query";
import type Page from "../../../shared/utils/pageResponse";
import { ListHeader } from "../../../shared/components/list/ListHeader";
import ListForm from "../../../shared/components/list/ListForm";
import { ListBody } from "../../../shared/components/list/ListBody";
import { getItem } from "../api/itemApi";
import { itemColumn } from "../model/ItemColumn";
import type Item from "../model/Item";

export default function ItemContainer({pageNo, totalElem}:{pageNo:number, totalElem: (totalNo: number)=>void}){    

    const {data:items, isLoading} = useQuery({
        queryKey: ['items', pageNo],
        queryFn: async ({queryKey}) => {
            const [, pageNo] = queryKey as [string, number];
            const response = await getItem(pageNo);
            const pageData: Page = response.data;
            totalElem(pageData.totalElements);
            
            // 데이터 가공 로직을 여기서 처리하면 View 컴포넌트가 더 깔끔해집니다.
            return pageData.content as Item[];
        },
        placeholderData: keepPreviousData,
    });

    return (
        <ListForm header={<ListHeader columns={itemColumn} />} >
            <ListBody 
                data={items} 
                columns={itemColumn} 
                isLoading={isLoading && !items} // keepPreviousData 사용 시 깜빡임 방지
            />
        </ListForm>
    )
}