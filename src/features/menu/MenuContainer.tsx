import { useEffect, useState } from "react";
import { ListHeader } from "../../shared/components/list/ListHeader";
import ListForm from "../../shared/components/list/ListForm";
import { ListItem } from "../../shared/components/list/ListItem";
import { getMenu, menuColumn, type Menu, type MenuRow } from "./menuApi";

export function MenuContainer(){
    const [menus, setMenus] = useState<Menu[]>();

    useEffect(()=>{
        const getMenus = async () => {
            const data: Menu[] = ((await getMenu()).data);
            setMenus(data);
        };

        getMenus();
    }, []);

    return(
        <ListForm header={<ListHeader columns={menuColumn} />} >
            {menus?.map(menu => (   
                <ListItem<MenuRow> columns={menuColumn} row={
                    {
                        menuCode: menu.menuCode,
                        menuCategory: menu.menuCategory,
                        menuName: menu.menuName,
                        menuPrice: menu.menuPrice,
                        releaseStatus: menu.releaseStatus,
                    }
                }/>
            ))}
        </ListForm>
    );
}