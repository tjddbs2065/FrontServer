import Title from "../../components/Item/Title";

interface ContentLayoutProps{
    title?: string
    widthClass?: string;
    children?: React.ReactNode 
}

export function ContentLayout({title="제목", widthClass="max-w-[1500px]", children}: ContentLayoutProps){
    return (
        <div className={`flex flex-col w-full ${widthClass} py-5 gap-4`}>
            <Title text={title} />
            <div className="flex-1 bg-white rounded-2xl border border-gray-200 shadow-xl p-4">
                {children}
            </div>
        </div>
    );
}