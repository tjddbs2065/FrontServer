import { ListHeader } from "../../../shared/components/list/ListHeader";
import ListForm from "../../../shared/components/list/ListForm";
import type Menu from "../model/Menu";
import { getMenu } from "../api/menuApi";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { ListBody } from "../../../shared/components/list/ListBody";
import { menuColumn } from "../model/MenuColumn";

export function MenuContainer(){

    const {data:menus, isLoading} = useQuery({
        queryKey: ['menus'],
        queryFn: async () => {
            const data: Menu[] = ((await getMenu()).data);
            return data as Menu[];
        },
        placeholderData: keepPreviousData,
    });

    return(
        <ListForm header={<ListHeader columns={menuColumn} />} >
            <ListBody
                data={menus}
                columns={menuColumn}
                isLoading={isLoading && !menus} // keepPreviousData 사용 시 깜빡임 방지
            />
        </ListForm>
    );
}