import React, { useEffect, useRef } from "react";

const RefInput = () => {
    const inputRef = useRef();

    useEffect(()=> {
        inputRef.current.focus();



        console.log("inputRef", inputRef); // inputRef {current: input}
        console.log("inputRef.current", inputRef.current) // <input type="text" placeholder="username">
        console.log("inputRef.current.value", inputRef.current.value);
    }, []);

    const login = () => {
        alert(`하이 ${inputRef.current.value}`);
    }

    return (
        <div>
            <input 
                ref={inputRef}
                type="text" 
                placeholder="username"/>
            <button onClick={login}>로그인</button>
        </div>
    );
}

export default RefInput;