import Title from "../../components/elements/Title";

interface ContentLayoutProps{
    title?: string
    children?: React.ReactNode 
}

export function ContentLayout({title, children}: ContentLayoutProps){
    return (
        <>
            {title && <Title text={title} />}
            <div className="flex-1 min-h-0 flex flex-col bg-white rounded-2xl border border-gray-200 shadow-xl p-4 gap-4">
                {children}
            </div>
        </>
    );
}