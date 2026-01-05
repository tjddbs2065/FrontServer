import { ListItem } from "./ListItem";
import type { Column } from "./RowItem";

interface ListBodyProps<T> {
    data: T[] | undefined;
    columns: Column<T>[];
    isLoading?: boolean;
    emptyMessage?: string;
}

export function ListBody<T>({ data, columns, isLoading, emptyMessage = "데이터가 없습니다." }: ListBodyProps<T>) {
    if (isLoading) return <div className="p-10 text-center text-gray-500">로딩 중...</div>;
    
    if (!data || data.length === 0) {
        return <div className="p-10 text-center text-gray-500">{emptyMessage}</div>;
    }

    return (
        <>
            {data.map((row, index) => (
                // 고유 ID가 있다면 key로 사용하는 것이 좋지만, 범용성을 위해 index를 사용하거나
                // row에 id 속성이 있음을 제네릭 제약으로 걸 수 있습니다.
                <ListItem key={index} columns={columns} row={row} />
            ))}
        </>
    );
}
