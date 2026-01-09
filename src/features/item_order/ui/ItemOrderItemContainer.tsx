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
import type { Column } from "../../../shared/components/list/RowItem";
import { toItemSelectedFromOrder } from "../model/utils";
import { useItemOrderStore } from "../model/ItemOrderStore";
import { useState } from "react";


export function ItemOrderItemContainer(){
    const {data:itemOrderItems, isLoading} = useQuery({
        queryKey: ['itemOrderItems'],
        queryFn: async () => {
            const data = ((await getItemOrderItem()).data);
            return data as ItemOrderItem[];
        },
        placeholderData: keepPreviousData,
    });
    const addItem = useItemOrderStore(s => s.addItem);
    const columns: Column<ItemOrderItem>[] = [
        ...itemOrderItemColumn,
        {
            key: "actions" as string,
            label: "담기",
            width: 80,
            render: (item) => {
                return <InputButton size="sm" text="담기" onClick={() => addItem?.(toItemSelectedFromOrder(item))}/>;
            }
        }
    ];
    
    const [inputCategory, setInputCategory] = useState<string>('전체');
    const [inputOrder, setInputOrder] = useState<string>('기본순');
    const [inputKeyword, setInputKeyword] = useState<string>();
    
    const [category, setCategory] = useState<string>('전체');
    const [order, setOrder] = useState<string>('기본순');
    const [keyword, setKeyword] = useState<string>();

    // itemOrderItems는 캐시에 담겨 있고 이를 filtering 해서 화면에 출력
    const data = itemOrderItems?.filter(item => {
        if(category !== "전체" && item.itemCategory !== category){
            return false;
        }
        if(keyword !== undefined && !item.itemName?.includes(keyword) && !item.itemCode?.includes(keyword)){
            return false;
        }

        return true;
    })?.sort((a, b)=>{
        if(order === "기본순") return 0;
        else if(order === "주문 많은순") return (b?.itemOrderCnt ?? 0) - (a?.itemOrderCnt ?? 0);

        return 0;
    });


    return(
        <div className="flex-1 flex flex-col p-2 gap-2">
            <div className="flex flex-row gap-2 items-center">
                <HeaderText text="품목 조회" size="xl"/>
                <Selector contents={["기본순", "주문 많은순"]} onSelect={setInputOrder}/>
                <Selector contents={["전체", "도우", "치즈", "토핑", "소스", "향신료", "야채", "면", "사이드", "음료"]} onSelect={setInputCategory}/>
                <InputText placeholder="품목명, 품목코드, 재료명으로 검색" sizeType="lg" onTextChange={setInputKeyword}/>
                <InputButton text="조회" onClick={()=>{
                    setCategory(inputCategory);
                    setOrder(inputOrder);
                    setKeyword(inputKeyword);
                }}/> 
            </div>
            <ListForm header={<ListHeader columns={columns} />} >
                <ListBody
                    data={data}
                    columns={columns}
                    isLoading={isLoading && !itemOrderItems}
                />
            </ListForm>
        </div>
    );
}