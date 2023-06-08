import React from "react";

const Person = (p) => {
    console.log(p)
    return (
        <div>
            <p>이름 : {p.name}</p>
            <p>레벨: {p.level}</p>
            <p>폰번호: {p.number}</p>
        </div>
    )
}

export default Person;