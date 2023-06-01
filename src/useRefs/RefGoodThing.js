import React, {useState, useRef, useEffect} from "react";

const RefGoodThing = () => {

    // ref 는 변화는 감지해야 하지만 변화가 렌더링을 발생시키면 안되는 값을 다룰때 편리하다.

    const [count, setCount] = useState(1);
    const renderCount = useRef(1);

    useEffect(()=>{
        // useState 사용해서 setCount 하면 무한루프임.
        // 왜냐면 useState 는 상태값 변경 될때마다 컴포넌트 재렌더링 되서
        renderCount.current = renderCount.current + 1;
        console.log('렌더링 수 :', renderCount.current);
    });

    return(
        <div>
            <p>Count: {count}</p>
            <p>RefCount: {renderCount.current}</p>
            <button onClick={() => setCount(count + 1)}>
                올려
            </button>
        </div>
    )

}

export default RefGoodThing;