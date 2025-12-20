import type { Column } from "./ListContainer";
import Text from "../Item/Text";

export function ListItem<T>({ columns, row }: {columns:Column<T>[]; row:T;}) {
    const gridCols: Record<number, string> = {
        1: "grid-cols-1",
        2: "grid-cols-2",
        3: "grid-cols-3",
        4: "grid-cols-4",
        5: "grid-cols-5",
        6: "grid-cols-6",
        7: "grid-cols-7",
        8: "grid-cols-8",
    }

    return (
    <div className={`grid ${gridCols[columns.length]} px-3 py-2 place-items-center`}>
        {columns.map(col => (
            <div key={String(col.key)}>
                {col.render ? col.render(row[col.key]) : <Text text={String(row[col.key])} />}
            </div>
        ))}
    </div>
  );
}
