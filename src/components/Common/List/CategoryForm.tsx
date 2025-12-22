export default function CategoryContainer({children} : {children:React.ReactNode}){
    return (
        <div className="w-full h-24 border border-gray-200 rounded-lg flex flex-row justify-start shadow-sm gap-5 between">
            {children}
        </div>
    );
}