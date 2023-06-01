import React, { useState, useRef } from "react";

const Ref = () => {

    const [renderer, setRenderer] = useState(0);

    // 컴포넌트 렌더링 되도 계속 값 유지. 
    // 마운트 시작 ~ 마운트 해제 될때까지. 
    const countRef = useRef(0);

    // Ref 함수 불릴때마다 0으로 똑같이 초기화.
    let countVar = 0;
    
    const doRendering = () => {
        setRenderer(renderer + 1);
    }

    const  increaseRef = () => {
        countRef.current = countRef.current + 1;
        console.log("ref", countRef.current); 
    }

    const increaseVar = () => {
        countVar += 1;
        console.log("var", countVar);
    }

    const printResults = () => {
        console.log(`ref: ${countRef.current}, var: ${countVar}`);
    }

    return (
        <div>
            <p>Ref: {countRef.current}</p>
            <p>Var: {countVar}</p>
            <button onClick={doRendering}>
                렌더!
            </button>
            <button onClick={increaseRef}>
                Ref 올려
            </button>
            <button onClick={increaseVar}>
                Var 올려
            </button>
            <button onClick={printResults}>Ref Var 값 출력</button>
        </div>
    )

}

export default Ref;