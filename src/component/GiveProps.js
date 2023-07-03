import React from "react";
import Time from "./Time";

const today = new Date().toISOString();
const word = "전달받을거";


const GiveProps = () => {
    return <Time time={today} word={word}/>
       
    
}

export default GiveProps;