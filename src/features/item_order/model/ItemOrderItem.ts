// ItemOrderItem의 데이터 
export default interface ItemOrderItem{
    itemNo?: number;
    itemCode?: string;
    itemName?: string;
    itemCategory?: string;
    stockUnit?: string;
    supplyUnit?: string;
    convertStock?: number;
    supplier?: string;
    itemPrice?: number;
    itemQuantity?: number;
    storeLimit?: number;
    managerLimit?: number;
    itemOrderCnt?: number;
}