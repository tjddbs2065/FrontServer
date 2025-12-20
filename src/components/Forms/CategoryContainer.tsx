import FilterElement from "../Item/FilterElement";
import InputButton from "../Item/InputButton";
import Selector from "../Item/Selector";

export default function CategoryContainer(){
    return (
        <div className="w-full h-20 border border-gray-200 rounded-lg p-1 flex flex-row justify-start shadow-sm gap-5 between">
            <div className="flex flex-row">
                <FilterElement text="카테고리">
                    <Selector contents={["피자", "사이드디시", "음료", "기타"]}/>
                </FilterElement>
                <FilterElement text="출시상태">
                    <Selector contents={["선택", "출시예정", "출시 중", "출시중단"]}/>
                </FilterElement>
            </div>
            <div className="flex flex-row">
                <FilterElement text="보기">
                    <div>
                        <InputButton text="목록"/>
                        <InputButton text="목록" variant="secondary"/>
                    </div>
                </FilterElement>
            </div>
        </div>
    );
}