import Text from "../../../shared/components/elements/Text";
import type { Column } from "./RowItem";

export function ListItem<T>({ columns, row, index }: {columns:Column<T>[]; row: T; index?: number;}) {
    const gridTemplateColumn = columns.map(col=>{
        if(col.width === "auto") return "auto";
        if(col.width === "fill") return "1fr";
        if(typeof col.width === "number") return `${col.width}px`;
        return "1fr";
    }).join(" ");
    
    return (
    <div className={`grid w-full h-14 items-center text-center border-b border-gray-200 shrink-0`}
        style={{gridTemplateColumns: gridTemplateColumn}}
    >
        {columns.map(col => (
            <div key={String(col.key)} className="truncate w-full px-1">
                {col.render ? col.render(row, index) : <Text text={String(row[col.key as keyof T])} />}
            </div>
        ))}
    </div>
  );
}
