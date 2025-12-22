import { useEffect, useState } from "react";
import { getItem, type Item } from "../../utils/itemApi"
import ListForm from "../Common/List/ListForm";
import { ListHeader } from "../Common/List/ListHeader";
import { itemColumn, type ItemRow } from "../Common/List/RowItem";


const itemRow: Partial<ItemRow> = {
    itemCode: "CHEESE-1",
    itemCategory: "치즈",
    itemName: "치즈1kg",
    ingredientName: "치즈",
    itemSupplier: "신선 유제품",
    itemPrice: "1000",
    note: "맛나요.",
}

export interface Page{
    content: [];
    endPage: string;
    page: string;
    size: string;
    startPage: string;
    totalElements: string;
    totalPages: string;
}

export function ItemContainer(){
    const [items, setItems] = useState<Item[]>();
    // const itemRows: Partial<ItemRow>[] = [itemRow, itemRow, itemRow, itemRow];

    useEffect(()=>{
        const getItems = async () => {
            const data: Page = ((await getItem(1)).data);
            console.log(data);
            setItems(data.content);
        };
        getItems();
    }, []);

    return (
        <ListForm header={<ListHeader columns={itemColumn} items={items} />} >
        </ListForm>
    )
    // return <ListForm items={items} />
}