import { useState } from "react";
import HeaderText from "./Item/HeaderText";

export function HeaderLayout(){
    return (
        <div className="flex flex-row flex-1 between">
            <img className="w-16 h-16 bg-gray-200 rounded-md"></img>
            
            <div className="w-40 flex flex-col h-full">
                <HeaderDropDown 
                headerText="매 출"
                contents={["매출 조회", "주문 조회"]}/>
            </div>
            <div className="w-40 flex flex-col h-full">
                <HeaderDropDown 
                headerText="품목/재고"
                contents={["품목 조회", "재고 현황 조회", "재고 변동 조회", "발주", "발주 내역 조회", "발주 제안"]}/>
            </div>
            <div className="w-40 flex flex-col h-full">
                <HeaderDropDown 
                headerText="메 뉴"
                contents={["메뉴 등록", "메뉴 조회", "판매 메뉴 관리"]}/>
            </div>
            <div className="w-40 flex flex-col h-full">
                <HeaderDropDown 
                headerText="직영점 목록"/>
            </div>
            <div className="w-40 flex flex-col h-full">
                <HeaderDropDown 
                headerText="계정 관리"
                contents={["계정 등록", "계정 목록 조회"]}/>
            </div>
            <div className="w-40 flex flex-col h-full">
                <span>본사</span>
                <span>로그아웃</span>
            </div>
        </div>
    );
}

type HeaderDropDownProps = {
    headerText: string,
    contents?: string[]
};

function HeaderDropDown(headerInfo: HeaderDropDownProps){
    const [open, setOpen] = useState(false);

    const BASE = "relative inline-block w-full h-full"
    return (
        <div className={`${BASE}`}
            onMouseEnter={()=>setOpen(true)}
            onMouseLeave={()=>setOpen(false)}
        >
                <div className="cursor-pointer w-full h-full center hover:bg-gray-100 rounded-xl">
                    <HeaderText text={headerInfo.headerText}/>
                </div>
            {
                open && headerInfo.contents && 
                (
                    <div className="absolute left-0">
                    <ul className="w-40 rounded-md border border-gray-300 bg-white shadow-lg">
                        {headerInfo.contents.map(item => (
                            <li 
                                className="p-4 hover:bg-gray-100 cursor-pointer center" 
                                key={item}
                            >{item}
                            </li>
                        ))}
                    </ul>
                    </div>
                )
            }
        </div>
    );
}