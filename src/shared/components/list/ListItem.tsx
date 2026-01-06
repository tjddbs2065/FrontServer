
import Text from "../../../shared/components/elements/Text";
import type { Column } from "./RowItem";

export function ListItem<T>({ columns, row, index }: {columns:Column<T>[]; row: T; index?: number;}) {
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
    <div className={`grid ${gridCols[columns.length]} w-full h-14 items-center text-center border-b border-gray-200 shrink-0`}>
        {columns.map(col => (
            <div key={String(col.key)} className="truncate w-full">
                {col.render ? col.render(row, index) : <Text text={String(row[col.key as keyof T])} />}
            </div>
        ))}
    </div>
  );
}
