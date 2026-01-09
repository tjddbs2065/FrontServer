import { create } from "zustand";
import type ItemSelected from "./ItemSelected";

interface ItemOrderStore{
    selectedItems: ItemSelected[];
    addItem: (item: ItemSelected)=>void;
    removeItem: (index: number)=>void;
    changeQuantity: (index: number, qty: number)=>void;
}

export const useItemOrderStore = create<ItemOrderStore>((set)=>({
    selectedItems: [],
    addItem: (item) => set((state)=>{
        const exists = state.selectedItems.some(i => i.itemNo === item.itemNo);
        if(exists) {alert("이미 선택된 품목입니다."); return { selectedItems: state.selectedItems }}
        
        return { selectedItems: [...state.selectedItems, item] };
    }),
    removeItem: (index) => set((state)=>({ selectedItems: state.selectedItems.filter((_, i) => i !== index) })),
    changeQuantity: (index, qty) => set((state)=>({ selectedItems: state.selectedItems.map((item, i) => i === index ? {...item, itemQuantity: qty} : item) })),
}));