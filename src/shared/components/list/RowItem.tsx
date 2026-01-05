// 칼럼 하나의 객체를 의미(key: label 형태)
export interface Column<T>{
    key: keyof T;
    label: string;
    render?: (value: T[keyof T] | undefined, row?: Partial<T>) => React.ReactNode;
}
export interface Row{
    id: number;
    name: string;
}