import Text from "../../../shared/components/elements/Text";
import type { Column } from "./RowItem";

export function ListHeader<T>({columns}: {columns: Column<T>[]}) {
    const gridTemplateColumn = columns.map(col=>{
        if(col.width === "auto") return "auto";
        if(col.width === "fill") return "1fr";
        if(typeof col.width === "number") return `${col.width}px`;
        return "1fr";
    }).join(" ");

    return (
    <div className={`grid bg-gray-100 h-12 items-center text-center pr-[16px] pl-4`}
        style={{gridTemplateColumns: gridTemplateColumn}}
    >
        {columns.map(col=>(
            <div key={String(col.key)} className="px-1">
                <Text text={col.label} style="bold"/>
            </div>
        ))}
    </div>
  );
}