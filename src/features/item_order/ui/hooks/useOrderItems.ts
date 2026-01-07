import { useNavigate } from "react-router-dom";
import { requestItemOrder } from "../../api/ItemOrderApi";
import type ItemOrderItem from "../../model/ItemOrderItem";

export default function useOrderItem(){    
    const navigate = useNavigate();

    return async ({totalPrice, totalItem, selectedItems} : {totalPrice: number, totalItem: number, selectedItems: ItemOrderItem[]}) => {
        try
        {
            await requestItemOrder({totalPrice, totalItem, selectedItems});
            alert("발주 성공");
            navigate("/item");
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