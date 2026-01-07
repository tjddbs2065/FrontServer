import { useQueryClient } from "@tanstack/react-query";
import type ItemProposal from "../../model/ItemProposal";
import { respondProposal } from "../../api/ItemOrderApi";

export default function useRespondProposal(){
    const queryClient = useQueryClient();
    
    return async (item: ItemProposal) => {
        try
        {
            await respondProposal(item.proposalNo);
            queryClient.setQueryData<ItemProposal[]>(['itemProposals'], (prev => {
                if(!prev) return prev;
                return prev.filter(p => p.proposalNo !== item.proposalNo);
            }));
        }
        catch(e: unknown)
        {
            if(e?.type === "BUSINESS_ERROR"){
                alert(e.message);
                return;
            }
            alert("처리 중 오류가 발생했습니다.");
        }
    }
}