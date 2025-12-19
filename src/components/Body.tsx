interface Props{
    children: React.ReactNode;

};
export default function BodyLayout({children}: Props){
    return (
        <>
            {children}
        </>
    );
}