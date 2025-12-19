type BodyAlign = "left" | "center";

interface PageLayoutProps{
    header?: React.ReactNode;
    footer?: React.ReactNode;
    children: React.ReactNode;
    bodyAlign?: BodyAlign;
}

export default function PageLayout({header, footer, children, bodyAlign = "center"}: PageLayoutProps){
    return (
        <div className="min-h-screen flex flex-col">
            {header && (<header className="w-full border-b">{header}</header>)}

            <main className={`flex flex-row flex-1 ${bodyAlign === "center" ? "justify-center" : "justify-start"}`}>
                {children}
            </main>

            {footer && (<footer className="w-full border-t">{footer}</footer>)}
        </div>
    );
}