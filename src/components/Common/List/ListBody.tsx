import type { Column, MenuRow } from "./ListForm";
import { ListItem } from "./ListItem";

export function ListBody({ columns, rows }: {columns:Column<MenuRow>[], rows:MenuRow[]}) {
    
  return (
    <>
      {rows.map(row => (
        <ListItem columns={columns} row={row} />
      ))}
    </>
  );
}
