import type { Column } from "../../../shared/components/list/RowItem";
import type ItemProposal from "./ItemProposal";

export const itemProposalColumn: Column<ItemProposal>[] = [
    {key: "proposalDate", label: "제안일자", render: (item)=> new Date(item.proposalDate).toLocaleDateString("ko-KR")},
    {key: "itemName", label: "품목명"},
    {key: "quantity", label: "수량", render: (item)=> `${item.quantity?.toLocaleString()} 개`},
    {key: "reason", label: "사유"},
];