export default interface ItemSelected {
    itemNo: number;
    itemName?: string;
    supplyUnit?: string;
    convertStock?: number;
    stockUnit?: string;
    itemQuantity: number;
    itemOrderPrice: number;
}