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
    
    if (!data || data.length === 0) return <div className="p-10 text-center text-gray-500">{emptyMessage}</div>;

    return (
        <>
            {data.map((row, index) => (
                <ListItem key={index} columns={columns} row={row} />
            ))}
        </>
    );
}
