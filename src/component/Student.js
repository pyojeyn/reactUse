import React, {useState} from "react";

const Student = ({ name, dispatch, id, type, isHere }) => {

    return (
        <div>
            <span style={{
                textDecoration: isHere ? "line-through" : "none",
                color: isHere ? 'gray' : 'black'
            }}
            onClick={() =>{
                dispatch({type: type.markStudent, payload: { id }})
            }}
            >{name}</span>
            <button onClick={()=>{
                dispatch({type: type.deleteStudent, payload: { id }})
            }}>삭제</button>
        </div>
    )
}

export default Student;