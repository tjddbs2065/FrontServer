// ItemOrderItem의 데이터 
export default interface ItemOrder{
    itemOrderNo: number;
    storeNo: number;
    storeName: string;
    requestDate: Date;
    quantity: number;
    price: number;
    orderStatus: string;
    receiveStatus: string;
}