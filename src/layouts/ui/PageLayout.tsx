interface PageLayoutProps{
    header?: React.ReactNode;
    footer?: React.ReactNode;
    children: React.ReactNode;
}

export default function PageLayout({header, footer, children}: PageLayoutProps){
    return (
        <div className={`h-screen flex flex-col`}>
            {header && (<header className="w-full border-b">{header}</header>)}

            <main className={`flex-1 flex overflow-hidden`}>
                {children}
            </main>

            {footer && (<footer className="w-full border-t">{footer}</footer>)}
        </div>
    );
}