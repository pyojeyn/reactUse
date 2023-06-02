import React, { useReducer } from "react";

const changeMoney = (currentMoney, action) => {
    console.log("dispatch로 인한 호출!");
	console.log("currentMoney", currentMoney);
	console.log("action", action);
    return currentMoney + action.payload;
}

const SimpleReducer = () => {

    const [money, dispatch] = useReducer(changeMoney, 7);

    return (
        <div>
            <span>현재 돈 : {money}</span>
            <button onClick={() => {
                dispatch({type: "이것은 타입입니다.", payload: 3})
            }}>확인</button>
        </div>
        
    )
}

export default SimpleReducer;