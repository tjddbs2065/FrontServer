
import Text from "../../../shared/components/elements/Text";
import type { Column } from "./RowItem";

export function ListItem<T>({ columns, row }: {columns:Column<T>[]; row:Partial<T>;}) {
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
    // h-14: 높이를 3.5rem(56px)으로 고정하고, items-center로 수직 중앙 정렬합니다. border-b로 각 행을 구분합니다.
    <div className={`grid ${gridCols[columns.length]} px-3 h-14 items-center text-center border-b border-gray-200`}>
        {columns.map(col => (
            <div key={String(col.key)} className="truncate m-auto">
                {col.render ? col.render(row[col.key]) : <Text text={String(row[col.key])} />}
            </div>
        ))}
    </div>
  );
}
