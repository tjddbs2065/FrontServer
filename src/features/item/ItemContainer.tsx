import ListForm from "../../shared/components/list/ListForm";
import { getItem, itemColumn, type Item } from "./itemApi";
import type Page from "../../shared/utils/pageResponse";
import { useQuery } from "@tanstack/react-query";
import { ListHeader } from "../../shared/components/list/ListHeader";
import { ListItem } from "../../shared/components/list/ListItem";

export function ItemContainer({pageNo, totalElem}:{pageNo:number, totalElem: (totalNo: number)=>void}){    

    const {data:items, isLoading} = useQuery({
        queryKey: ['items', pageNo],
        queryFn: async ({queryKey}) => {
            const [, pageNo] = queryKey as [string, number];
            const response = await getItem(pageNo);
            const pageData: Page = response.data;
            totalElem(pageData.totalElements);
            return pageData.content as Item[];
        },
    });

    if(isLoading) return <div>로딩 중...</div>;

    return (
        <ListForm header={<ListHeader columns={itemColumn} />} >
            {items?.map(item => (
                <ListItem columns={itemColumn} row={
                    {
                        itemCode: item.itemCode,
                        itemCategory: item.itemCategory,
                        itemName: item.itemName,
                        ingredientName: item.ingredientName,
                        supplier: item.supplier,
                        itemPrice: item.itemPrice,
                        note: item.note || "-",
                    }
                }/>
            ))}
        </ListForm>
    )
}