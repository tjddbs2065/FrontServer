import { create } from "zustand";

interface ItemOrderStore{
    orderStatus: string;
    startDate: string;
    endDate: string;
    searchToken: number;
    setOrderStatus: (status: string)=>void;
    setStartDate: (date: string)=>void;
    setEndDate: (date: string)=>void;
    triggerSearch: ()=>void;
}

export const useItemOrderStore = create<ItemOrderStore>((set)=>({
    orderStatus: "",
    startDate: "",
    endDate: "",
    searchToken: 0,
    setOrderStatus: (status) => set(()=>{
        if(status === "전체") return ({ orderStatus: "" });

        return ({ orderStatus: status })
    }),
    setStartDate: (date) => set(()=>({ startDate: date })),
    setEndDate: (date) => set(()=>({ endDate: date })),
    triggerSearch: () => set((state)=>({ searchToken: state.searchToken + 1 })),
}));