import React from "react";
import Person from "./Persion";

const person = {
    name: "Jane",
    level: "SILVER",
    number: "01012341234"
}

const GiveMultiProps = () => {
    return <Person {...person}/>
    // return <Person p={person}/>
}

export default GiveMultiProps;