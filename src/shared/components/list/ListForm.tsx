import type React from "react";

export interface ListFormProps{
    header: React.ReactNode;
    children: React.ReactNode;
}

export default function ListForm({header, children}: ListFormProps){
    return (
        <div className="w-full flex-1 border border-gray-200 rounded-lg flex flex-col justify-start shadow-sm overflow-hidden min-h-0">
            {header}
            <div className="flex-1 flex flex-col overflow-y-auto gap-4 pt-4">
                {children}
            </div>
        </div>
    );
}