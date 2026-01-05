import { ListHeader } from "../../../shared/components/list/ListHeader";
import ListForm from "../../../shared/components/list/ListForm";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { ListBody } from "../../../shared/components/list/ListBody";
import type ItemOrderItem from "../model/ItemOrderItem";
import { getItemOrderItem } from "../api/ItemOrderApi";
import { itemOrderItemColumn } from "../model/ItemOrderItemColumn";
import Selector from "../../../shared/components/elements/Selector";
import InputText from "../../../shared/components/elements/InputText";
import InputButton from "../../../shared/components/elements/InputButton";
import HeaderText from "../../../shared/components/elements/HeaderText";

export function ItemOrderItemContainer(){

    const {data:itemOrderItems, isLoading} = useQuery({
        queryKey: ['itemOrderItems'],
        queryFn: async () => {
            const data = ((await getItemOrderItem()).data);
            return data as ItemOrderItem[];
        },
        placeholderData: keepPreviousData,
    });

    const columns = [
        ...itemOrderItemColumn,
        {
            key: "actions" as any,
            label: "상세보기",
            render: () => {
                return <InputButton text="담기"/>;
            }
        }
    ]
    return(
        <div className="flex-1 flex flex-col p-2 gap-2">
            <div className="flex flex-row gap-2 items-center">
                <HeaderText text="품목 조회" size="xl"/>
                <Selector contents={["기본순"]}/>
                <Selector contents={["기본순"]}/>
                <InputText placeholder="품목명, 품목코드, 재료명으로 검색"/>
                <InputButton text="조회"/> 
            </div>
            <ListForm header={<ListHeader columns={columns} />} >
                <ListBody
                    data={itemOrderItems}
                    columns={columns}
                    isLoading={isLoading && !itemOrderItems} // keepPreviousData 사용 시 깜빡임 방지
                />
            </ListForm>
        </div>
    );
}