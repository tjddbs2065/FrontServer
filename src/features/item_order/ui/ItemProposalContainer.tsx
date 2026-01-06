import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getItemProposal, respondProposal } from "../api/ItemOrderApi";
import type ItemProposal from "../model/ItemProposal";
import { itemProposalColumn } from "../model/ItemProposalColumn";
import InputButton from "../../../shared/components/elements/InputButton";
import type { Column } from "../../../shared/components/list/RowItem";
import { ListHeader } from "../../../shared/components/list/ListHeader";
import ListForm from "../../../shared/components/list/ListForm";
import { ListBody } from "../../../shared/components/list/ListBody";
import Text from "../../../shared/components/elements/Text";
import { useItemOrderStore } from "../model/ItemOrderStore";
import { toItemSelectedFromOrder } from "../model/utils";


export function ItemProposalContainer(){
    const {data:itemProposals, isLoading} = useQuery({
        queryKey: ['itemProposals'],
        queryFn: async () => {
            const data = ((await getItemProposal()).data);
            return data as ItemProposal[];
        },
        placeholderData: keepPreviousData,
    });
    const addItem = useItemOrderStore(s => s.addItem);

    const columns: Column<ItemProposal>[] = [
        ...itemProposalColumn,
        {
            key: "actions" as string,
            label: "관리",
            render: (item) => {
                return (
                    <div className="flex gap-2">
                        <InputButton text="담기" onClick={() => {
                            respondProposal(item.proposalNo);
                            addItem?.(toItemSelectedFromOrder(item))
                        }} />
                        <InputButton text="취소" variant="secondary"/>
                    </div>
                );
            }
        }
    ];
    
    return(
        <div className="flex-1 flex flex-col p-2 gap-2">
            <div className="flex flex-row gap-2 items-center">
                <Text style="bold" size="xl" text="발주 제안"/>
            </div>
            <ListForm header={<ListHeader columns={columns} />} >
                <ListBody
                    data={itemProposals}
                    columns={columns}
                    isLoading={isLoading && !itemProposals}
                    emptyMessage="제안된 발주 내역이 없습니다."
                />
            </ListForm>
        </div>
    );
}