interface PageContainerProps {
  align?: "center" | "top";
  children: React.ReactNode;
}

export function PageContainer({ align = "top", children }: PageContainerProps) {
  return (
    <div
      className={
        align === "center"
          ? "h-full flex mx-auto items-center justify-center"
          : "flex-1 min-h-0 flex flex-col w-[1500px] mx-auto px-4 py-6"
      }
    >
      {children}
    </div>
  );
}
