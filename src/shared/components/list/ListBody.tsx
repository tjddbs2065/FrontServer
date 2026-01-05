
import type { MenuRow } from "../../../features/menu/menuApi";
import { ListItem } from "./ListItem";
import type { Column } from "./RowItem";

export function ListBody({ columns, rows }: {columns:Column<MenuRow>[], rows:MenuRow[]}) {
    
  return (
    <>
      {rows.map(row => (
        <ListItem columns={columns} row={row} />
      ))}
    </>
  );
}
