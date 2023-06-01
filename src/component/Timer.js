import React, { useEffect } from "react";

const Timer = () => {

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("타이머 돌아가는중 ...")
        }, 1000); // 1초마다 반복. 

        return () => {
            // Timer 컴포넌트가 화면에서 사라질때 실행. 종료시켜준다.
            clearInterval(timer);
            console.log("타이머가 종료되었습니다.");
        }
    },[])

    return (
        <div>
            <span>타이머를 시작합니다. 콘솔을 보세요!</span>
        </div>
    );
}

export default Timer;