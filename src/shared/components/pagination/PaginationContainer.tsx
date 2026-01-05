import PaginationForm from "./PaginationForm";

type PaginationProps = {
  totalCount: number;        // 전체 데이터 수
  pageSize: number;          // 한 페이지에 보여줄 개수
  currentPage: number;       // 현재 페이지
  onPageChange: (page: number) => void;
};

export default function PaginationContainer({
    totalCount,
    pageSize,
    currentPage,
    onPageChange,
}: PaginationProps){
    return (
        <PaginationForm 
            totalCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={onPageChange}
        />
    );
}