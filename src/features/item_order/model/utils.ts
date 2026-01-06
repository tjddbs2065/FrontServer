import type ItemOrderItem from "./ItemOrderItem";
import type ItemProposal from "./ItemProposal";
import type ItemSelected from "./ItemSelected";

export const toItemSelectedFromOrder = (item: ItemOrderItem | ItemProposal): ItemSelected => {

    const itemQuantity = "quantity" in item ? item.quantity : 1;
    const itemOrderPrice = item.itemPrice as number * (itemQuantity ?? 1);

    return {
        itemNo: item.itemNo as number,
        itemName: item.itemName ?? "",
        supplyUnit: item.supplyUnit ?? "",
        itemOrderPrice: itemOrderPrice as number,
        itemQuantity: itemQuantity as number,
    };
};