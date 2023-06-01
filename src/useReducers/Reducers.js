import React, { useState, useReducer } from "react";

// reducer - state를 업데이트 하는 역할 (은행)
// dispatch - state 업데이트를 위한 요구
// **action - 요구의 내용



const ACTION_TYPES = {
    deposit: 'deposit',
    withdraw: 'withdraw',
}



// reducer : 새로운 값을 반환할 함수. 
const reducer = (state, action) => {
    // 첫번째 인수 state 는 money이다.
    console.log("dispatch의 호출 ! 예금 버튼 누름.")
    console.log("state", state);
    console.log("action", action);
    console.log("action.payload", action.payload);

    switch (action.type){
        case ACTION_TYPES.deposit:
            return state + action.payload;
        case ACTION_TYPES.withdraw:
            return state - action.payload;
        default:
            return state;    
    }
};

const Reducers = () => {


    const [number, setNumber] = useState(0);

    // money state는 reducer 함수를 통해서만 수정이 된다. 
    // dispatch는 사용자가 호출 -> reducer 실행?
    const [money, dispatch] = useReducer(reducer, 0);

    return(
        <div>
            <h2>제니 은행입니다.</h2>
            <p>잔고 : {money}원</p>
            <input
                type="number"
                value={number}
                onChange={(e) => {setNumber(parseInt(e.target.value))}}
                step="1000"
            />
            <button onClick={()=>{
                dispatch({type: ACTION_TYPES.deposit, payload: number})
            }}>예금</button>
            <button onClick={() => dispatch({type: ACTION_TYPES.withdraw, payload: number})}>출금</button>
        </div>
    )

}

export default Reducers;