import Text from "../../../shared/components/elements/Text";
import type { Column } from "./RowItem";

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
        9: "grid-cols-9",
    }
    return (
    // h-12: 높이를 3rem(48px)으로 고정하고, items-center로 내부 요소를 수직 중앙 정렬합니다.
    <div className={`grid ${gridCols[columns.length]} bg-gray-100 px-3 h-12 items-center text-center`}>
        {columns.map(col=>(
            <div key={String(col.key)}>
                <Text text={col.label} style="bold"/>
            </div>
        ))}
    </div>
  );
}