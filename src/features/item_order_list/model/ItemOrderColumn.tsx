import Text from "../../../shared/components/elements/Text";
import type { Column } from "../../../shared/components/list/RowItem";
import type ItemOrder from "./ItemOrder";

export const itemOrderColumn: Column<ItemOrder>[] = [
    {key: "itemOrderNo", label: "발주번호", width: 100},
    {key: "storeName", label: "직영점", width: "fill"},
    {key: "requestDate", label: "요청일자", width: 250, render: (item)=> {
        const d = new Date(item.requestDate);
        const month = String(d.getMonth()+1).padStart(2, "0");
        const date = String(d.getDate()).padStart(2, "0");
        const hour = String(d.getHours()).padStart(2, "0");
        const min = String(d.getMinutes()).padStart(2, "0");

        return `${d.getFullYear()}-${month}-${date} ${hour}:${min}`;
    }},
    {key: "quantity", label: "품목수량", width: 100},
    {key: "price", label: "발주액", width: 200, render: (item)=>item.price.toLocaleString() + "원"},
    {key: "orderStatus", label: "발주상태", width: 200, render: (item)=>{
        const textColor = item.orderStatus === "대기" ? "yellow" : item.orderStatus === "승인" ? "green" : "red";
        
        return (<Text text={item.orderStatus} style="medium" color={textColor}/>);
    }},
    {key: "receiveStatus", label: "입고상태", width: 200, render: (item)=>{
        const textColor = item.receiveStatus === "입고대기" ? "yellow" : item.receiveStatus === "입고완료" ? "green" : "red";
        
        return (<Text text={item.receiveStatus} style="medium" color={textColor}/>);
    }},
];