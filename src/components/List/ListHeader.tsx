import type { Column } from "./ListContainer";
import Text from "../Item/Text";

export function ListHeader<T>({columns}: {columns: Column<T>[]}) {
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
    <div className={`grid ${gridCols[columns.length]} bg-gray-100 px-3 py-2 place-items-center`}>
        {columns.map(col=>(
            <div key={String(col.key)}>
                <Text text={col.label} style="bold"/>
            </div>
        ))}
    </div>
  );
}