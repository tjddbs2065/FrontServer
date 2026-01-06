export default interface ItemProposal {
    proposalNo: number
    managerNo: string;
    managerName: string;

    storeNo: number;
    storeName: string;
    itemNo: number;
    itemName: string;
    itemPrice: number;

    quantity: number;
    supplyUnit: string;
    reason: string;
    proposalDate: Date;
    responseDate: Date;
}